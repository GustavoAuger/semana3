import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (authService.isAuthenticated()) {
    // Si el usuario está autenticado y trata de acceder al login, redirigir al home
    if (state.url.includes('/login')) {
      return router.parseUrl('/');
    }
    return true;
  }
  
  // Si no está autenticado, redirigir al login
  return router.parseUrl('/login');
};