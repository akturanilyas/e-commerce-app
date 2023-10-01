import React, { FC } from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { useGetCategoriesQuery } from '@/api/base/services/product-service/productService';
import Tab from '@/components/common/tab/Tab';
import { useParams, useRouter } from 'next/navigation';
import { ProductListProps } from '@/components/product-list/ProductList.interface';
import { MAIN_PATH } from '@/constants/mainPath.constant';
import TextInput from '@/components/common/TextInput';
import { useForm } from 'react-hook-form';
import ProductListItems from '@/components/product-list/ProductListItems';

const ProductList: FC<ProductListProps> = (props) => {
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

      <ProductListItems products={products} search={form.watch('search')} />
    </BaseView>
  );
};

export default ProductList;
