import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user';
import { Router } from '@angular/router';
import { UserAuthService } from '../../services/user-auth';
import { take } from 'rxjs';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private _userService = inject(UserService);
  private _userAuthService = inject(UserAuthService);
  private _router = inject(Router);

  protected loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  protected loginErrorMessage = "";

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this._userService.login(
      this.loginForm.get('email')?.value as string,
      this.loginForm.get('password')?.value as string
    ).pipe(take(1)).subscribe({
      next: (response) => {
        this.loginErrorMessage = "";

        this._userAuthService.setToken(response.data.token);
        this._router.navigate(['/products']);
      },
      error: (error) => {
        this.loginErrorMessage = error.error.message;
      },
    })

  }
}
