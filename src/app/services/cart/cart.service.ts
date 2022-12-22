import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuService } from 'src/app/services/menu.service/menu.service';
import { Menu } from 'src/app/model/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itemsChanged = new Subject<Menu[]>();

  averageHealthScore: number = 0;
  averagePricePerServing: number = 0;

  items: Menu[] = [];
  total!: Menu;
  id?: number;


  constructor( private menuSVC: MenuService ) { }

  addToCart(id: number) {
    this.menuSVC.getItemDetail(id).subscribe(
      (data: any) =>{
        console.log(data)
        this.addItemToCart(data);
      },
      ),
    this.getItems();
  }

  addItemToCart(item: Menu) {
    this.items.push(item);
    this.itemsChanged.next(this.items);
  }

    getItems() {
      this.getPricePerServing();
      this.getHealthScore();
      // this.getAverageMinutes();
      return this.items;
    }

    // getAverageMinutes(): number {



  //   this.items.forEach((menu: any) => {
  //     this.readyInMinutes += menu.readyInMinutes;
  //     return readyInMinutes;
  //   })

  //   console.log(readyInMinutes)
  //   return readyInMinutes
  // }

  getHealthScore(): number {

    console.log(this.items)


    this.averageHealthScore += this.items.map((menu) => menu.healthScore).reduce((a, v) => a + v, 0);

    return this.averageHealthScore;
  }

  getPricePerServing(): number {

    this.averagePricePerServing = this.items.map((menu) => menu.pricePerServing).reduce((a, v) => a + v, 0);

    console.log(this.averagePricePerServing)
    return this.averagePricePerServing;
  }

}
