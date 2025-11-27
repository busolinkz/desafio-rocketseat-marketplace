import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  getToken(): string | null {
    return localStorage.getItem('auth-token') || '';
  }

  setToken(token: string): void {
    localStorage.setItem('auth-token', token);
  }
}
