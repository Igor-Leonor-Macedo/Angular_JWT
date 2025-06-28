import { Routes } from '@angular/router';
import {LoginComponent} from './page/login/login';
import {HomeComponent} from './page/home/home';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent}
];
