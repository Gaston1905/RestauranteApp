import { MenuService } from 'src/app/services/menu.service';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CartService {


  items: any[] = [];

  id? : number | undefined

  constructor(public menuSVC : MenuService) {}

  addToCart(menu: any[]) {
    this.menuSVC.getItemDetail(this.id!)
    this.items.push(menu);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }


}
