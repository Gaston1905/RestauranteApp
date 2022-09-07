import { CartComponent } from './components/cart/cart.component';
import { SearchComponent } from './components/search/search.component';
import { DetailMenuComponent } from './components/detail-menu/detail-menu.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', canActivate:[AuthGuardService], component: HomeComponent },
  { path: 'menu', canActivate:[AuthGuardService], component: MenuComponent },
  { path: 'detailMenu', canActivate:[AuthGuardService], component: DetailMenuComponent},
  { path: 'search', canActivate:[AuthGuardService], component: SearchComponent },
  { path: 'cart', canActivate:[AuthGuardService], component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
