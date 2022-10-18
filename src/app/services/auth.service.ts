import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'





@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://challenge-react.alkemy.org/';
  currentUserSubject: BehaviorSubject<any>;
  parcero: boolean | undefined;

  constructor(
    private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
    JSON.parse(localStorage.getItem('currentUser') || '{}')
  );}

  IniciarSesion(credenciales: any): Observable<any> {
    return this.http.post(`${this.url}`, credenciales).pipe(
      map((data) => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        this.parcero = true;
        return data;
      })
    )
  }



  get UserAuth() {

    return this.currentUserSubject.value;
  }

  loggedIn() {
    this.parcero
    return localStorage.getItem('currentUser');
  }
  logoutUser() {
    this.parcero = false;
    sessionStorage.clear();
    localStorage.clear();

    this.currentUserSubject.next(null);
    alert('LOGOUT!');
  }


}
