import { useAppSelector } from './useRedux';

export const useMain = () => useAppSelector((state) => state.main);
export const useGlobalLoading = () => useAppSelector((state) => state.loading);
export const useModal = () => useAppSelector((state) => state.modal);
export const useResult = () => useAppSelector((state) => state.result);
