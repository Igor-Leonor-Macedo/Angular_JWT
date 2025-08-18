import { Routes } from '@angular/router';
import {LoginComponent} from './page/login/login';
import {HomeComponent} from './page/home/home';
import {HomeAdminComponent} from './page/home-admin/home-admin';
import {authGuard} from './guard/authGuard';
import {HomeManagerComponent} from './page/home-manager/home-manager';
import {AcessoNegadoComponent} from './page/acesso-negado/acesso-negado';
import {MonitorComponent} from './page/monitor/monitor';
import {AlertComponent} from './page/alert/alert';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
    data: { roles: ['ROLE_USER', 'ROLE_ADMIN', 'ROLE_MANAGER'] }
  },
  {
    path: 'home_admin',
    component: HomeAdminComponent,
    canActivate: [authGuard],
    data: { roles: ['ROLE_ADMIN', 'ROLE_MANAGER'] }
  },
  {
    path: 'home_manager',
    component: HomeManagerComponent,
    canActivate: [authGuard],
    data: { roles: ['ROLE_MANAGER'] }
  },
  {
    path: 'monitor',
    component: MonitorComponent,
    canActivate: [authGuard],
    data: { roles: ['ROLE_USER', 'ROLE_ADMIN', 'ROLE_MANAGER'] }
  },
  {
    path: 'alert',
    component: AlertComponent,
    canActivate: [authGuard],
    data: { roles: ['ROLE_USER', 'ROLE_ADMIN', 'ROLE_MANAGER'] }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'acesso-negado',
    component: AcessoNegadoComponent,
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
