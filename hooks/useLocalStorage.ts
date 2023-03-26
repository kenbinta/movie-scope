/**
 * Custom React hook to manage and persist state in local storage.
 * This hook allows for easy state management while also persisting the data in the user's browser.
 */
import { useState, useEffect } from "react";

type ReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export const useLocalStorage = <T>(key: string, initialValue: T): ReturnType<T> => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = typeof window !== "undefined" && window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const item = JSON.stringify(storedValue);
      typeof window !== "undefined" && window.localStorage.setItem(key, item);
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};
