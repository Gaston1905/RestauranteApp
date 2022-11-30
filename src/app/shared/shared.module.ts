import { ComponentsModule } from './../components/components.module';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlertComponent } from './alert/alert.component';





@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  providers: [
    AlertComponent
  ]
})
export class SharedModule { }
