import { Menu } from 'src/app/model/menu.interface';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';
import { MenuService } from 'src/app/services/menu.service/menu.service';
import { CartService } from '../../services/cart/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
  })

  @Input() total: Menu[] = [];

  menu: Menu[] = [];
  defaultImage: string = "https://spoonacular.com/menuItemImages/pilaf.png";

  constructor(
    public menuSVC: MenuService,
    public cartSVC: CartService,
    public route: Router
  ) { }

  ngOnInit(): void {
    let menu =  document.getElementById('menu')
    if(menu != null){
      const keyup = fromEvent(menu, 'keyup');
      keyup.pipe(
        map((e: any)=> e.currentTarget.value),
       debounceTime(500)
      ).subscribe(
        e => this.onSearch(e))
    }
  }

  onSearch(menu: string){
    if(menu.length > 2){
    this.menuSVC.getItemsByType(menu).subscribe(
      (data => this.menu = data.results)
    )
    this.menuSVC.getItemDetail
    } else {
      this.menu = [];
     }
  }

  onItemDetail(id: number){
    this.menuSVC.getItemDetail(id).subscribe(
      (data: any) =>{
        console.log(data)
        this.route.navigate(['/detail', { menu: JSON.stringify(data)}])
      }
    )
  }

  addMenu(id: number) {
    this.cartSVC.addToCart(id)
  }

}
