import { Menu } from 'src/app/model/menu.interface';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-resume-cart',
  templateUrl: './resume-cart.component.html',
  styleUrls: ['./resume-cart.component.scss']
})
export class ResumeCartComponent implements OnInit {


  time: number = 0;

  constructor( public cartSVC: CartService ) { }

  ngOnInit(): void {
    this.getMenu()
  }

  menu = this.cartSVC.getItems();

  getMenu() {
    JSON.parse(localStorage.getItem('menuChoice') || '{}')
    this.menu.forEach((data) => {
      console.log(data)
      this.time += data.readyInMinutes
      console.log(this.time)
    })
    return this.time
  }
}
