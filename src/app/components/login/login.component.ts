import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  name: string | undefined;
  isLoading = false;


  constructor(
    private formBuilder: FormBuilder,
    public authSVC: AuthService,
    private route: Router,

  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {

  }



  isloged = () => this.authSVC.loggedIn();

  get Email() {
    return this.form.get('email');
  }
  get Password() {
    return this.form.get('password');
  }

  onSubmit(event: Event) {
    this.isLoading = true;

    if (this.form.invalid) {
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Datos Erroneos',
        showConfirmButton: false,
        timer: 2000
      }),

      this.isLoading = false;
      return;
    }
    Swal.fire({
      position: 'center',
      title: 'Autentificando',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
        this.isLoading = false;
        return;
      }
    });
    event.preventDefault;
    this.authSVC
      .IniciarSesion(this.form.value)
      .pipe(
        tap({
          next: (x) => {

            this.isLoading = false;
          },
          error: (err) => {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Verifique los datos introducidos',
              showConfirmButton: false,
              timer: 2000
            });
            this.isLoading = false;
          },
          complete: () =>  Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Cuenta autentificada',
            showConfirmButton: false,
            timer: 2000
          })
        }),
      )
      .subscribe((_data) => {
        this.route.navigate(['/home']);
      });

  }
  handleClear() {
    this.name = '';
  }





}
