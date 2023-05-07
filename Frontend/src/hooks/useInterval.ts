import { useEffect, useRef } from 'react';

type Callback = (...args: any[]) => void;

const useInterval = <T extends Callback>(callbackFunction: T, delay: number): void => {
  const savedCallback = useRef<T>(callbackFunction);

  useEffect(() => {
    savedCallback.current = callbackFunction;
  }, [callbackFunction]);
  useEffect(() => {
    const handler = (...args: Parameters<T>) => {
      return savedCallback.current(...args);
    };

    if (delay !== null) {
      const id = setInterval(handler, delay);

      return () => {
        return clearInterval(id);
      };
    }
  }, [delay]);
};

export default useInterval;

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
