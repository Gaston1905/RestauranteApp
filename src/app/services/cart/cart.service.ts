import { Menu } from 'src/app/model/menu.interface';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { MenuService } from 'src/app/services/menu.service/menu.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Array<any> = [];
  total!: Menu;
  id?: number;

  readyInMinutes: number = 0;
  healthScore: number = 0;
  pricePerServing: number = 0;

  constructor( private menuSVC: MenuService ) { }

  addToCart(id: number) {
    this.menuSVC.getItemDetail(id).subscribe(
      (data: any) =>{
        const { id, title, image, healthScore, readyInMinutes, pricePerServing } = data
        this.total = {id, title, image, healthScore, readyInMinutes, pricePerServing }
        this.items.push(this.total)
        return this.items
      }
      ),
      this.getMenu()
      this.getItems();
      console.log(this.getItems());
    }

    getItems() {
      // this.getHealthScore()
      // this.getPricePerServing()
    return this.items;
  }


  getMenu() {

    this.readyInMinutes = 0;

    let amount = this.items.length + 1;
    console.log(amount)

    let averageMinutes: any = this.items.filter((readyInMinutes) => { readyInMinutes});

    this.readyInMinutes += averageMinutes.readyInMinutes / amount;

    console.log(this.readyInMinutes)

  }

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
