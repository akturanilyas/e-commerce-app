import { DependencyList, useEffect } from 'react';

export function useDebounce(callback: (deps?: DependencyList) => void, waitTime: number, deps?: DependencyList) {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback(deps);
    }, waitTime);

    return () => {
      clearTimeout(timer);
    };
  }, deps);
}
