import { MenuService } from 'src/app/services/menu.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  menu:any;
  defaultImage: string = "https://spoonacular.com/menuItemImages/pilaf.png"

  constructor( public menuSVC: MenuService) { }



  ngOnInit(): void {
    const menu =  document.getElementById('menu')
    if(menu != null){
      const keyup = fromEvent(menu, 'keyup');
      keyup.pipe(
        map((e: any)=> e.currentTarget.value),
       debounceTime(500)
      ).subscribe(
        e => this.onSearch(e));
    }

  }

  onSearch(menu: string){
    if(menu.length > 2){
    this.menuSVC.getItemsByType(menu).subscribe(
      (data => this.menu = data.results)
    )}
  }

  onAddMenu(item: object){
    let menu = JSON.parse(sessionStorage.getItem('menu')!)
    menu.push(item)
    sessionStorage.setItem('menu',JSON.stringify(menu))
    console.log(menu)
  }

}
