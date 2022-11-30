import { Injectable } from '@angular/core';

import { MenuService } from 'src/app/services/menu.service/menu.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: any[] = [];
  id?: number;

  constructor( private menuSVC: MenuService ) { }

  addToCart(id: number) {
    this.menuSVC.getItemDetail(id).subscribe(
      (data: any) =>{
        this.items.push(data);
        return data
      }
    ),
    this.getItems();
  }

  getItems() {
    return this.items;
  }

}
