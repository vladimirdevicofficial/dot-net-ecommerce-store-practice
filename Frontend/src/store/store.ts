import { createContext, useContext } from 'react';

import { create, useStore as useZustandStore } from 'zustand';
import { devtools } from 'zustand/middleware';


type StoreInterface = unknown
const getDefaultInitialState = () => {
  return {};
};

// eslint-disable-next-line no-use-before-define
export type StoreType = ReturnType<typeof initializeStore>

const zustandContext = createContext<StoreType | null>(null);

export const { Provider } = zustandContext;

export const useStore = <T>(selector: (state: StoreInterface) => T) => {
  const store = useContext(zustandContext);

  if (!store) {
    throw new Error('Store is missing the provider');
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return useZustandStore(store, selector);
};

export const initializeStore = (preloadedState: Partial<StoreInterface> = {}) => {
  return create(devtools(() => {
    return {
      ...getDefaultInitialState(),
      ...preloadedState,
    };
  }, { name: 'Main Store' }));
};
