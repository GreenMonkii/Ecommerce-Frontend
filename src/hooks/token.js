import { useEffect } from "react";
import useLocalStorage from "./local-storage";

const useToken = () => {
  const [token, setToken] = useLocalStorage("token");

  useEffect(() => {
    const storedToken = token;

    if (storedToken) {
      setToken(storedToken);
    }
  }, [token, setToken]);

  const isLoggedIn = !!token;

  return isLoggedIn;
};

export default useToken;
