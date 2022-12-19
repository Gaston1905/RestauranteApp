import { Injectable } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service/menu.service';
import { Menu } from 'src/app/model/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  averageHealthScore: number = 0;
  averagePricePerServing: number = 0;

  items: Menu[] = [];
  total!: Menu;
  id?: number;


  constructor( private menuSVC: MenuService ) { }

  addToCart(id: number) {
    this.menuSVC.getItemDetail(id).subscribe(
      (data: any) =>{
        let { id, title, image, healthScore, readyInMinutes, pricePerServing } = data
        this.total = {id, title, image, healthScore, readyInMinutes, pricePerServing }
        this.items.push(this.total)
        return this.items
      },
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

    console.log(this.items)

    this.averageHealthScore = Number(this.items.find(menu => menu.healthScore));

    this.averageHealthScore += this.items.map((menu) => menu.healthScore).reduce((a, v) => a + v, 0);

    return this.averageHealthScore;
  }

  getPricePerServing(): number {

    this.averagePricePerServing = this.items.map((menu) => menu.pricePerServing).reduce((a, v) => a + v, 0);

    console.log(this.averagePricePerServing)
    return this.averagePricePerServing;
  }

}
