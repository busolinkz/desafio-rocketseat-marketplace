import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthSuccessResponse } from '../interfaces/auth-success-response';
import { LoginSuccessResponse } from '../interfaces/login-success-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _httpClient = inject(HttpClient);

  validateUser(): Observable<AuthSuccessResponse> {
    return this._httpClient.get<AuthSuccessResponse>('http://localhost:3000/api/protected');
  }

  login(email: string, password: string): Observable<LoginSuccessResponse> {
    const dto = {
      email,
      password,
    };
    return this._httpClient.post<LoginSuccessResponse>('http://localhost:3000/api/users/login', dto);
  }
}
