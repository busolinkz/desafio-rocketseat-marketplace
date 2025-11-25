import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserAuthService } from '../services/user-auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const userAuthService = inject(UserAuthService);

  const TOKEN = userAuthService.getToken();
  if (TOKEN) {
    const requestWithAuthorizationToken = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${TOKEN}`)
    });

    return next(requestWithAuthorizationToken);
  }

  return next(req);
};
