'use client';

import { createSlice } from '@reduxjs/toolkit';
import { User } from '@/models/userModel';

type MainSlice = {
  user: User | undefined;
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
  },
});

export const { setUser, setDarkMode } = mainSlice.actions;
