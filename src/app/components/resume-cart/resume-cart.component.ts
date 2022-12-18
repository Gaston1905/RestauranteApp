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


  constructor( public cartSVC: CartService ) { }

  ngOnInit(): void { }

  menu = this.cartSVC.getItems();

}
