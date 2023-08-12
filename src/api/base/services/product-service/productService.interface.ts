import { IResponse } from '@/api/commonService.interface';
import { Product } from '@/types/product.model';

export interface GetCategoryProductsQuery {
  type?: string;
}

export interface ProductsQueryResponse extends IResponse {
  products: Array<Product>;
}
