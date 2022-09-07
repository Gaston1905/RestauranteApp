import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private cartService: CartService ) {}

    menu = this.cartService.getItems();

  ngOnInit(): void {}



}
