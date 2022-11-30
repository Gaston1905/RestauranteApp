import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  searchURL = environment.searchURL
  detailURL = environment.detailURL
  apiKey = environment.apiKey

  constructor(private http: HttpClient) { }

  getItemDetail(id : number){
    return this.http.get<any>(`${this.detailURL}/${id}/information?${this.apiKey}`)
  }

  getItemsByType(queryMenu : String){
    return this.http.get<any>(`${this.searchURL}${this.apiKey}&query=${queryMenu}`)

  }

}
