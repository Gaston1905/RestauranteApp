import { Menu } from 'src/app/model/menu.interface';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { MenuService } from 'src/app/services/menu.service/menu.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  menuChoice = JSON.parse(localStorage.getItem('menuChoice') || '{}')

  items: Array<any> = [];
  id?: number;

  readyInMinutes: number = 0;
  healthScore: number = 0;
  pricePerServing: number = 0;

  constructor( private menuSVC: MenuService ) { }

  addToCart(id: number) {
    this.menuSVC.getItemDetail(id).subscribe(
      (data: any) =>{
        localStorage.setItem('menuChoice', JSON.stringify(this.items));
        return data
      }
      ),
      this.getItems();
    }

    getItems() {
      // this.getMenu()
      // this.getHealthScore()
      // this.getPricePerServing()
    return this.items;
  }

  // getMenu() {

  //   this.readyInMinutes = 0;

  //   let amount = this.menuChoice.length;

  //   this.readyInMinutes += this.menuChoice.readyInMinutes / amount;

  //   console.log(this.readyInMinutes)

  // }

  // getHealthScore() {

  //   this.healthScore = 0;

  //   let amount = this.menuChoice.length;

  //   this.healthScore += this.menuChoice.healthScore / amount;

  //   console.log(this.healthScore)
  // }

  // getPricePerServing() {

  //   this.pricePerServing = 0;

  //   let amount = this.menuChoice.length;

  //   this.pricePerServing += this.menuChoice.pricePerServing / amount;

  //   console.log(this.pricePerServing)
  // }

}
