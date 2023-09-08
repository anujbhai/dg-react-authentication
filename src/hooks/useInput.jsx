import useLocalStorage from "./useLocalStorage"

const useInput = (key, initVal) => {
  const [val, setVal] = useLocalStorage(key, initVal)

  const reset = () => setVal(initVal)

  const attrObj = {
    val,
    onChange: e => setVal(e.target.value)
  }

  return [val, reset, attrObj]
}

export default useInput

