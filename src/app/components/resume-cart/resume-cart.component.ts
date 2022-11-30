import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-resume-cart',
  templateUrl: './resume-cart.component.html',
  styleUrls: ['./resume-cart.component.scss']
})
export class ResumeCartComponent implements OnInit {

  constructor( private cartSVC: CartService ) { }

  ngOnInit(): void { }

  menu = this.cartSVC.getItems();




}
