import { useState, useEffect } from "react";
import { isTokenValid } from "../auth/auth";
import { getItem } from "../utils/local-storage";

const useToken = () => {
  const [token] = useState(() => getItem("token") || null);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const checkTokenValidity = async (storedToken) => {
      if (storedToken) {
        const res = await isTokenValid(storedToken);
        setIsValid(res);
      }
    };

    checkTokenValidity(token);
  }, [token]);

  return { token, isValid };
};

export default useToken;
