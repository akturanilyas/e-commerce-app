import { IResponse } from '@/api/commonService.interface';
import { ListProduct } from '@/types/product.model';

export interface GetCategoryProductsQuery {
  type?: string;
}

export interface ProductsQueryResponse extends IResponse {
  products: Array<ListProduct>;
}
