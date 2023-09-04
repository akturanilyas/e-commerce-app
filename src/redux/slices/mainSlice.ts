'use client';

import { createSlice } from '@reduxjs/toolkit';
import { User } from '@/models/userModel';
import { Product } from '@/types/product.model';

type MainSlice = {
  user: User | undefined;
  basketItems: Array<Product>;
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
  basketItems: [],
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
      const existItem = state.basketItems.find((item) => item.id === action.payload.product.id);

      if (existItem) {
        existItem.count! += 1;
      } else {
        action.payload.product.count = 1;
        state.basketItems.push(action.payload.product);
      }
    },
    removeProduct(
      state,
      action: {
        payload: {
          id: number;
        };
      },
    ) {
      state.basketItems = (state.basketItems || []).filter((product) => product.id !== action.payload.id);
    },
    incrementItem(
      state,
      action: {
        payload: {
          id: number;
        };
      },
    ) {
      (state.basketItems || []).find((product) => product.id === action.payload.id)!.count! += 1;
    },
    decrementItem(
      state,
      action: {
        payload: {
          id: number;
        };
      },
    ) {
      (state.basketItems || []).find((product) => product.id === action.payload.id)!.count! -= 1;
    },
  },
});

export const { setUser, setDarkMode, addProduct, removeProduct, incrementItem, decrementItem } = mainSlice.actions;
