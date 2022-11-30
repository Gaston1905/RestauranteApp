import { AuthService } from './../../services/auth.service/auth.service';
import { AlertComponent } from './../../shared/alert/alert.component';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private alert: AlertComponent,
      private authSVC: AuthService,
      private route: Router
  ) {
      this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      });
    }

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

  onSubmit(event: Event) {

    if( this.form.invalid ) {
      this.alert.info();
      return
    }
    event.preventDefault;
    this.authSVC.login(this.form.value).pipe(
      tap({
        next: (x) => {
          this.alert.success();
        },
        error: () => {
          this.alert.error();
        },
        complete: () => this.alert.success()
      })
    )
    .subscribe((_data) => {
      this.route.navigate(['/home'])
    })
  }

}
