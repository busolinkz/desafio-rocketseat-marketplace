import { ProductResponse } from './product-response';

export interface ProductsResponse {
  message: string;
  data: ProductResponse[];
}
