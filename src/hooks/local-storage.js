import propTypes from "prop-types";
import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    console.log("useEffect called");
    console.log(value, initialValue, key);
    if (value !== initialValue) {
      console.log("Setting value in local storage");
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [initialValue, key, value]);

  return [value, setValue];
};

export default useLocalStorage;

useLocalStorage.propTypes = {
  key: propTypes.string.isRequired,
  initialValue: propTypes.any,
};
