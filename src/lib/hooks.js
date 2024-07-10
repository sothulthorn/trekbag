import { useContext } from 'react';
import { ItemsContext } from '../contexts/ItemsContextProvider';

export const useItemContext = () => {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error(
      'useItemContext must be used within an ItemContextProvider'
    );
  }

  return context;
};
