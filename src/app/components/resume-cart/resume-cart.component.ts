import { Menu } from 'src/app/model/menu.interface';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CartService } from '../../services/cart/cart.service';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-resume-cart',
  templateUrl: './resume-cart.component.html',
  styleUrls: ['./resume-cart.component.scss']
})
export class ResumeCartComponent implements OnInit {

  // menuChoice = JSON.parse(localStorage.getItem('menuChoice') || '{}')

  // time: number = 0;
  // healthScore: number = 0;
  // pricePerServing: number = 0;

  constructor( public cartSVC: CartService, public wh:WarehouseService ) { }

  ngOnInit(): void {
  }

  menu = this.cartSVC.getItems();

//   getMenu() {

//     this.time = 0;

//     let amount = this.menuChoice.length

//     this.time += this.menuChoice.readyInMinutes / amount;

//     console.log(this.time)

//   //   menuChoice.forEach((data: any) => {
//   //     console.log(data)
//   //     this.time += data.readyInMinutes
//   //     console.log(this.time)
//   //   })
//   //   return this.time
//   // }



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
