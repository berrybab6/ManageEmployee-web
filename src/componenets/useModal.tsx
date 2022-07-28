import { useState } from 'react';

export const useModal = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggle = () => setIsShown(!isShown);
  return {
    isShown,
    toggle,
  };
};


export const useUpdateModal = () => {

  const [isUpdateShown, setIsUpdateShown] = useState<boolean>(false);
  const toggleUpdate = () => setIsUpdateShown(!isUpdateShown);
  return {
    isUpdateShown,
    toggleUpdate,
  };
};
