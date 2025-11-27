import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth';
import { firstValueFrom } from 'rxjs';
import { UserService } from '../services/user';

export const loginAuthGuard: CanActivateFn = async (route, state) => {
  const _userAuthService = inject(UserAuthService);
  const _userService = inject(UserService);
  const _router = inject(Router);
  const HAS_TOKEN = _userAuthService.getToken();

  if (!HAS_TOKEN) return true;

  try {
    await firstValueFrom(_userService.validateUser());
    return _router.navigate(['/products']);
  } catch (error) {
    return true;
  }
};
