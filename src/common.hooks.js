import { useEffect, useRef } from "react";

export const useInterval = (callback, intervalMs, isActive) => {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => savedCallback.current(), intervalMs);
      return () => clearInterval(interval);
    }
  }, [isActive, intervalMs]);
};
