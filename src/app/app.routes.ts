import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';
import { Horizontal } from './layouts/horizontal/horizontal';
import { Login } from './pages/login/login';
import { NewProduct } from './pages/new-product/new-product';
import { Products } from './pages/products/products';
import { loginAuthGuard } from './guards/login-auth-guard';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
    canActivate: [loginAuthGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: '',
    component: Horizontal,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'products',
        component: Products,
      },
      {
        path: 'new-product',
        component: NewProduct,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];
