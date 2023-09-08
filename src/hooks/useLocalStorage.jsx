import { useEffect, useState } from "react";

const getLocalValue = (key, initValue) => {
  // SSR/NextJS
  if (typeof window === 'undefined') return initValue

  // if a value is already stored
  const localVal = JSON.parse(localStorage.getItem(key))

  if (localVal) return localVal

  // return result
  if (initValue instanceof Function) return initValue()

  return initValue
}

const useLocalStorage = (key, initValue) => {
  const [value, setValue] = useState(() => {
    return getLocalValue(key, initValue)
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
