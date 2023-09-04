'use client';

import { createSlice } from '@reduxjs/toolkit';
import { User } from '@/models/userModel';
import { Product } from '@/types/product.model';

type MainSlice = {
  user: User | undefined;
  basket_items: Array<Product>;
  preferences: {
    isDarkMode: boolean;
  };
};

const isDarkMode = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  return false;
};

const initialState: MainSlice = {
  user: undefined,
  basket_items: [],
  preferences: {
    isDarkMode: isDarkMode(),
  },
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setDarkMode(state, action) {
      state.preferences.isDarkMode = action.payload;
    },
    addProduct(
      state,
      action: {
        payload: {
          product: Product;
        };
      },
    ) {
      state.basket_items = [...state.basket_items, action.payload.product];
    },
    removeProduct(
      state,
      action: {
        payload: {
          id: number;
        };
      },
    ) {
      state.basket_items = (state.basket_items || []).filter((product) => product.id === action.payload.id);
    },
  },
});

export const { setUser, setDarkMode, addProduct, removeProduct } = mainSlice.actions;
