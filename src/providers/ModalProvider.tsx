import React from 'react';
import { ModalItem } from '@/redux/slices/modalSlice';
import { useModal } from '@/hooks/useSlices';
import modalRoute from '@/routes/modalRoute';

const ModalProvider = () => {
  const openedModals = useModal();

  const renderModal = ({ item, index }: { item: ModalItem; index: number }) => {
    const modal = modalRoute.find((modal) => item.name === modal.name);

    if (modal) {
      return React.createElement(modal.component, {
        ...openedModals.modals.find((item) => item.name === modal.name),
        key: index,
      });
    }
  };

  return <>{openedModals.modals.map((item, index) => renderModal({ item, index }))}</>;
};

export default ModalProvider;
