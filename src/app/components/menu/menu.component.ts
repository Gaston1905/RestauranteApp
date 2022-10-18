import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: any = JSON.parse(localStorage.getItem('menu')!) || {};
  faSquarePlus = faSquarePlus;
  faSquareXmark = faSquareXmark;
  product : any = []



  constructor (
    public menuSVC : MenuService,
    public route : Router,
    private cartService : CartService) {}

  ngOnInit() {}




  onItemDetail(id: number){
    this.menuSVC.getItemDetail(id).subscribe(
      (data: any) =>{
        console.log(data)
        this.route.navigate(['/detailMenu', { menu: JSON.stringify(data)}])
      }
    )
  }

  addToCart(menu: any[]) {
    this.cartService.addToCart(menu);
    console.log(menu)
  }



  onDelete(id :number){
    const menu = this.menu.filter((menu: { id: number; }) => menu.id != id);
    localStorage.setItem('menu',JSON.stringify(menu))
  }

  onSearch(){
    this.route.navigate(['/search'])
  }


}



