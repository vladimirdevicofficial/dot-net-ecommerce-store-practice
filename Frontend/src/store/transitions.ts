import { SetStateAction } from 'react';

import create from 'zustand';
import { devtools } from 'zustand/middleware';

const store = (set: SetStateAction<any>) => {
  return {
    isPageTransition: false,
    setPageTransition: (bool: boolean) => {
      return set(() => {
        return { isPageTransition: bool };
      }, false, 'TRANSITION/SET_PAGE_TRANSITION');
    },
    isComputation: false,
    setComputation: (bool: boolean) => {
      return set(() => {
        return { isComputation: bool };
      }, false, 'TRANSITION/SET_COMPUTATION');
    },
  };
};

const useTransitionStore = create(devtools(store, { name: 'Transition Store' }));

export default useTransitionStore;
