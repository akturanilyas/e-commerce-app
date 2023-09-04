'use client';

import React, { FC, useState } from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { StoreItem } from '@/components/common/store-item/StoreItem';
import { useGetCategoriesQuery } from '@/api/base/services/product-service/productService';
import Tab from '@/components/common/tab/Tab';
import { useParams, useRouter } from 'next/navigation';
import { ProductListProps } from '@/components/product-list/ProductList.interface';
import { MAIN_PATH } from '@/constants/mainPath.constant';
import TextInput from '@/components/common/TextInput';
import { useForm } from 'react-hook-form';
import { useDebounce } from '@/hooks/useDebounce';
import { useMain } from '@/hooks/useSlices';

const ProductList: FC<ProductListProps> = (props) => {
    const { basket_items } = useMain();
  const { products } = props;
  const { category } = useParams() as {
    category: string;
  };
  const route = useRouter();
  const form = useForm();

  const { data: categories } = useGetCategoriesQuery({});
  const items = categories?.slice(0, 5).map((category) => ({
    label: category,
    path: category,
  }));

  const [_products, setProducts] = useState(products);

  useDebounce(
    () => {
      setProducts(
        products?.filter((product) =>
          JSON.stringify([product.title, product.description, product.brand])
            .toLowerCase()
            .includes(String(form.getValues('search')).toLowerCase()),
        ),
      );
    },
    222,
    [form.watch('search')],
  );

  console.log(basket_items);

  return (
    <BaseView className={'w-full h-full'}>
      <BaseView className={'flex flex-row justify-items-center gap-2 pt-2'}>
        <Tab
          className={'shadow-md border border-slate-200 rounded-md'}
          items={items || []}
          onClick={(label) => {
            route.push(`${MAIN_PATH.CATEGORIES}/${label}`);
          }}
          currentTab={category}
        />

        <BaseView className={'flex flex-row w-1/5'}>
          <TextInput
            form={form}
            name={'search'}
            placeholder={'Search...'}
            className={'m-0'}
            inputClassName={'bg-white border-slate-200 rounded-md shadow-md placeholder-slate-400 placeholder:text-sm'}
          />
        </BaseView>
      </BaseView>

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
    </BaseView>
  );
};

export default ProductList;
