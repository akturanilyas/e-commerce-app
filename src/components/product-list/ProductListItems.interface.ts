import { ListProduct } from '@/types/product.model';

export interface ProductListItemsProps {
  products?: Array<ListProduct>;
  search?: string;
}
