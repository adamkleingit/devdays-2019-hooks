import { useState, useRef, useEffect } from "react";

export const useInterval = (callback, delay, isActive) => {
  const tick = useRef();

  tick.current = callback
  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => tick.current(), delay);

      return () => clearInterval(interval);
    }
  }, [isActive])
}

export const usePersistedState = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    let result = initialValue;
    try {
      const persistedState = localStorage.getItem(key);

      if (persistedState) {
        result = JSON.parse(persistedState)
      }
    }
    catch(e) {}
    return result;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value])

  return [value, setValue];

}