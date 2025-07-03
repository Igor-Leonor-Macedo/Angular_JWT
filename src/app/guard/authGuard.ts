import {ActivatedRouteSnapshot, CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../service/authService';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    router.navigate(['/login']);
    return false;
  }

  const allowedRoles = route.data['roles'] as string[] || [];
  const userRoles = authService.getUserRoles();

  const hasPermission = userRoles.some(role => allowedRoles.includes(role));

  if (!hasPermission) {
    router.navigate(['/acesso-negado']);
    return false;
  }

  return true;
};
