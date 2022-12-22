import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart/cart.service';
import { Menu } from 'src/app/model/menu.interface';


@Component({
  selector: 'app-resume-cart',
  templateUrl: './resume-cart.component.html',
  styleUrls: ['./resume-cart.component.scss']
})
export class ResumeCartComponent implements OnInit {

  menu: Menu[];

  constructor( public cartSVC: CartService ) {
    this.menu = [...this.cartSVC.items];
    this.cartSVC.itemsChanged.subscribe((items: Menu[]) => {
      console.log(items)
      this.menu = [...items];
    });
  }

  ngOnInit(): void { }


}
