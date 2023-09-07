import { createSlice } from '@reduxjs/toolkit';

export type ResultItem = {
  id: string;
    title: string;
  message: string;
};

type ResultSlice = {
  results: ResultItem[];
};

const initialState: ResultSlice = {
  results: [],
};

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    addResult(state, action) {
      state.results.unshift(action.payload);
    },
    removeResult(state, action) {
      state.results = state.results.filter((result) => result.id !== action.payload.id);
    },
    removeCurrentResult(state) {
      state.results.shift();
    },
    clearAllResults(state) {
      state.results = [];
    },
  },
});

export const { addResult, removeResult, removeCurrentResult, clearAllResults } = resultSlice.actions;
