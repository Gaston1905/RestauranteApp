import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  URI: string = '';



  constructor(private http: HttpClient) {
    this.URI = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=34df9126854e49b29ce52ae07624a5b9';
  }


  getMenu(): Observable<any> {
    return this.http.get<any>(this.URI + '');
  }

  getItemDetail(id : number){
    return this.http.get<any>('https://api.spoonacular.com/recipes/'+ id +'/information?apiKey=34df9126854e49b29ce52ae07624a5b9')
  }

  getItemsByType(queryMenu : String){
    return this.http.get<any>('https://api.spoonacular.com/recipes/complexSearch?apiKey=34df9126854e49b29ce52ae07624a5b9&query='+ queryMenu)
  }



}
