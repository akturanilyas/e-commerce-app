import { createSlice } from '@reduxjs/toolkit';

export type ModalItem = {
  name?: string;
  eventName?: string;
  props?: Record<string, unknown>;
};

type ModalSlice = {
  modals: ModalItem[];
};

const initialState: ModalSlice = {
  modals: [],
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    addModal(state, action) {
      state.modals.push(action.payload);
    },
    removeModal(state, action) {
      state.modals = state.modals.filter((modal) => modal.name !== action.payload.name);
    },
    removeCurrentModal(state) {
      state.modals.pop();
    },
    clearAllModals(state) {
      state.modals = [];
    },
  },
});

export const { addModal, removeModal, removeCurrentModal, clearAllModals } = modalSlice.actions;
