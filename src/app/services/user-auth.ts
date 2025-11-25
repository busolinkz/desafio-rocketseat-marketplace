import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  getToken(): string | null {
    return "TOKEN";
  }
}
