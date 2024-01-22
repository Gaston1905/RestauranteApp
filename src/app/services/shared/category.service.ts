import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { category } from 'src/app/mock/category.mock';
import { Category } from 'src/app/model/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  getAll(): Observable<Category[]> {
    return of(category);
  }
}
