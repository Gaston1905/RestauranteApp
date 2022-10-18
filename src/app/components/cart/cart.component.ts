import { MenuService } from 'src/app/services/menu.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  faLeftLong = faLeftLong;

  constructor(
    private route: Router,
    private cartService: CartService,
    private menuSVC: MenuService,
     ) {}

    menu = this.cartService.getItems();

  ngOnInit(): void {}

  onItemDetail(id: number){
    this.menuSVC.getItemDetail(id).subscribe(
      (data: any) =>{
        console.log(data)
        this.route.navigate(['/detailMenu', { menu: JSON.stringify(data)}])
      }
    )
  }

  onDelete(id :number){
    const menu = this.menu.filter((menu: { id: number; }) => menu.id != id);
    localStorage.setItem('menu',JSON.stringify(menu))
  }



}
