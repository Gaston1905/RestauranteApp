import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { DetailMenuComponent } from './detail-menu/detail-menu.component';
import { ResumeCartComponent } from './resume-cart/resume-cart.component';



@NgModule({
  declarations: [
    CartComponent,
    SearchComponent,
    DetailMenuComponent,
    ResumeCartComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartComponent,
    SearchComponent,
    DetailMenuComponent,
    ResumeCartComponent
  ]
})
export class ComponentsModule { }
