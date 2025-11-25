import { Routes } from '@angular/router';
import { Horizontal } from './layouts/horizontal/horizontal';
import { Login } from './pages/login/login';
import { NewProduct } from './pages/new-product/new-product';
import { Products } from './pages/products/products';

export const routes: Routes = [
  {
    path: "login",
    component: Login
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/login"
  },
  {
    path: "",
    component: Horizontal,
    children: [
      {
        path: "products",
        component: Products
      },
      {
        path: "new-product",
        component: NewProduct
      }
    ]
  },
  {
    path: "**",
    redirectTo: "/login"
  }
];
