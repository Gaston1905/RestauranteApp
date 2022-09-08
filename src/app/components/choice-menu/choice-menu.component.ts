import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { MenuService } from 'src/app/services/menu.service';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-choice-menu',
  templateUrl: './choice-menu.component.html',
  styleUrls: ['./choice-menu.component.scss']
})
export class ChoiceMenuComponent implements OnInit {

  faLeftLong = faLeftLong;
  id? : number;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private cartService: CartService,
    private menuSVC: MenuService,
  ) { }

  ngOnInit(): void {
  }

  menu = this.cartService.getItems();

  detail = this.menuSVC.getItemDetail(this.id!)

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
