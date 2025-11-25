import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user';
import { UserAuthService } from '../services/user-auth';
import { firstValueFrom } from 'rxjs';

export const AuthGuard: CanActivateFn = async (route, state) => {
  const _userAuthService = inject(UserAuthService);
  const _userService = inject(UserService);
  const _router = inject(Router);

  const TOKEN = _userAuthService.getToken();
  if (!TOKEN) {
    return _router.navigate(['/login']);
  }

  // If userToken is invalid, the request will fail
  try {
    await firstValueFrom(_userService.validateUser());

    // If the user is already logged in and the rout he is trying to access is the login one,
    // he is redirected to products page
    if (state.url === '/login') {
      return _router.navigate(['/products']);
    }

    return true;
  } catch (error) {
    return _router.navigate(['/login']);
  }
};
