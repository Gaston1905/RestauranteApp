import { Injectable } from '@angular/core';

import { MenuService } from 'src/app/services/menu.service/menu.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Array<any> = [];
  id?: number;

  pricePerServing: number = 0;
  healthScore: number = 0;
  readyInMinutes: number = 0;

  constructor( private menuSVC: MenuService ) { }

  addToCart(id: number) {
    this.menuSVC.getItemDetail(id).subscribe(
      (data: any) =>{
        this.items.push(data);
        return data
      }
      ),
      this.accumulated();
      this.getItems();
    }

    getItems() {
    return this.items;
  }

  accumulated() {
    this.pricePerServing = 0;
    this.healthScore = 0;
    this.readyInMinutes = 0;

    this.items.forEach((data: any) => {
      console.log(data)
      this.pricePerServing += data.pricePerServing;
      this.healthScore += data.healthScore;
      this.readyInMinutes += data.readyInMinutes;
      console.log(this.readyInMinutes)
    });

    let amountItems = this.items.length;
    this.healthScore =  this.healthScore / amountItems;
    this.readyInMinutes = this.readyInMinutes / amountItems;
    this.pricePerServing = this.pricePerServing / amountItems;

  }

}
