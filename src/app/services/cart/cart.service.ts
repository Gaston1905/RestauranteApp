import { Injectable } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service/menu.service';
import { Menu } from 'src/app/model/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Menu[] = [];
  total!: Menu;
  id?: number;

  averageHealthScore: number = this.getHealthScore();
  averagePricePerServing: number = 0;

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
      this.getItems();
    }

    getItems() {
      this.getPricePerServing();
      this.getHealthScore();
      return this.items;
    }

    getAverageMinutes(): number {

    let readyInMinutes: number = 0;

    this.items.forEach((menu: any) => {
      readyInMinutes += menu.readyInMinutes;
    })

    console.log(readyInMinutes)
    return readyInMinutes
  }

  getHealthScore(): number {

    this.averageHealthScore = 0;

    this.averageHealthScore += this.items.map((menu) => {return menu.healthScore}).reduce((a, v) => a + v, 0)

    console.log(this.averageHealthScore)
    return this.averageHealthScore;
  }

  getPricePerServing(): number {

    this.averagePricePerServing = this.items.map((menu) => {return menu.pricePerServing}).reduce((a, v) => a + v, 0);

    console.log(this.averagePricePerServing)
    return this.averagePricePerServing;
  }

}
