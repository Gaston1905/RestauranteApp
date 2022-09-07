import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, switchMap, UnsubscriptionError } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  menu:any;
  defaultImage: string = "https://spoonacular.com/menuItemImages/pilaf.png"

  constructor(
    public menuSVC: MenuService, public route: Router, public cartService : CartService) { }



  ngOnInit(): void {
    const menu =  document.getElementById('menu')
    if(menu != null){
      const keyup = fromEvent(menu, 'keyup');
      keyup.pipe(
        map((e: any)=> e.currentTarget.value),
       debounceTime(500),

      ).subscribe(
        e => this.onSearch(e))

    }

  }

  onSearch(menu: string){
    if(menu.length > 2){
    this.menuSVC.getItemsByType(menu).subscribe(
      (data => this.menu = data.results)
    )}
  }

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

}
