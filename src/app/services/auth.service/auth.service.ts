import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { userRegister } from 'src/app/model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://reqres.in/';
  currentUserSubject: BehaviorSubject<any>;

  constructor( private http: HttpClient ) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
  }


  login(credentials: any): Observable<any> {
    return this.http.post(`${this.url}api/login`, credentials).pipe(
      map((data) => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        console.log(data)
        return data
      })
    );
  }

  register(userRegister: userRegister): Observable<any> {
    return this.http.put(`${this.url}`, userRegister)
  }
}
