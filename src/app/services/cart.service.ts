import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {


  items: any[] = [];


  constructor() {}

  addToCart(menu: any[]) {
    this.items.push(menu);
  }

  getItems() {
    return this.items;
    console.log(this.items)
  }

  clearCart() {
    this.items = [];
    return this.items;
  }


}
