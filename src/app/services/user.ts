import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthSuccessResponse } from '../interfaces/auth-success-response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _httpClient = inject(HttpClient);

  validateUser() {
    return this._httpClient.get<AuthSuccessResponse>("http://localhost:3000/api/protected")
  }
}
