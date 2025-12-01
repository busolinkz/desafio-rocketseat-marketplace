import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthSuccessResponse } from '../interfaces/auth-success-response';
import { LoginSuccessResponse } from '../interfaces/login-success-response';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _httpClient = inject(HttpClient);

  validateUser(): Observable<AuthSuccessResponse> {
    return this._httpClient.get<AuthSuccessResponse>(environment.apiUrl + '/protected');
  }

  login(email: string, password: string): Observable<LoginSuccessResponse> {
    const dto = {
      email,
      password,
    };
    return this._httpClient.post<LoginSuccessResponse>(environment.apiUrl + '/users/login', dto);
  }
}
