import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: any = JSON.parse(localStorage.getItem('menu')!) || {};
  faSquarePlus = faSquarePlus;
  faSquareXmark = faSquareXmark;



  constructor (
    public menuSVC : MenuService,
    public route : Router) {}

  ngOnInit() {

    if(JSON.stringify(this.menu)=='{}'){
        this.menuSVC.getMenu()
        .subscribe({
         next: (data: any) => {
          localStorage.setItem('menu',JSON.stringify(data.results))
          this.menu = JSON.parse(localStorage.getItem('menu')!)
            console.log(data);
          },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        },
      })
    }

    this.menu = JSON.parse(localStorage.getItem('menu')!)
  }




  onItemDetail(id: number){
    this.menuSVC.getItemDetail(id).subscribe(
      (data: any) =>{
        console.log(data)
        this.route.navigate(['/detailMenu', { menu: JSON.stringify(data)}])
      }
    )
  }

  onAddMenu(item: object){
    let menu = JSON.parse(localStorage.getItem('menu')!)
    menu.push(item)
    localStorage.setItem('menu',JSON.stringify(menu))
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



