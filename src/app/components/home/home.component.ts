import { MenuService } from './../../services/menu.service';

import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string | undefined;


  constructor(
    public authSVC: AuthService,
    private route: Router,
    private menuSVC: MenuService
   ) {}

  ngOnInit() : void {

  }

  isloged = () => this.authSVC.loggedIn();



  handleClear() {
    this.name = '';
  }

  logoutUser() {
    this.authSVC.logoutUser()
    this.route.navigate(['/']);
  }

}






