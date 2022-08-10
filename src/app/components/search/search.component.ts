import { MenuService } from 'src/app/services/menu.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, Subject, finalize } from 'rxjs';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public isloading = false;
  public data$ : any;

  constructor( private menuSVC: MenuService) { }

  ngOnInit(): void {

  }





}
