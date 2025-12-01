import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from '../../environments/environment';
import { NewProductRequest } from '../interfaces/new-product-request';
import { NewProductResponse } from '../interfaces/new-product-response';
import { ProductsResponse } from '../interfaces/products-response';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly _httpClient = inject(HttpClient);

  saveProduct(product: NewProductRequest): Observable<NewProductResponse> {
    return this._httpClient.post<NewProductResponse>(environment.apiUrl + '/products', product);
  }

  getProducts(): Observable<ProductsResponse> {
    return this._httpClient.get<ProductsResponse>(environment.apiUrl + '/products').pipe(shareReplay(1));
  }
}
