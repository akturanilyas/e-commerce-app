'use client';

import React, { FC, useState } from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { StoreItem } from '@/components/common/store-item/StoreItem';
import { useDebounce } from '@/hooks/useDebounce';
import { ProductListItemsProps } from '@/components/product-list/ProductListItems.interface';

const ProductListItems: FC<ProductListItemsProps> = ({ products, search }) => {
  const [_products, setProducts] = useState(products);

  useDebounce(
    () => {
      setProducts(
        products?.filter((product) =>
          JSON.stringify([product.title, product.description, product.brand])
            .toLowerCase()
            .includes(String(search).toLowerCase()),
        ),
      );
    },
    222,
    [search],
  );

  return (
    <BaseView
      className={`flex flex-row flex-wrap border-2 border-slate-200 
          dark:border-gray-700 dark:bg-gray-800 
          rounded-md h-full my-4 shadow-md`}
    >
      {_products?.map((item) => (
        <BaseView key={item.id} className={'sm:w-1/2 md:w-1/4 lg:w-1/5 p-4'}>
          <StoreItem key={item.id} item={item} />
        </BaseView>
      ))}
    </BaseView>
  );
};

export default ProductListItems;
