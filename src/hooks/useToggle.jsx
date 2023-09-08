import useLocalStorage from "./useLocalStorage";

const useToggle = (key, initVal) => {
  const [val, setVal] = useLocalStorage(key, initVal);

  const toggle = (val) =>
    setVal((prev) => (typeof val === "boolean" ? val : !prev));

  return [val, toggle];
};

export default useToggle;
