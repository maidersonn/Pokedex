import { useState, useEffect } from "react";
import { auth } from "services";
import { toLocalStorage, fromLocalStorage } from "utils";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    const token = fromLocalStorage();
    getUser(token);
  }, []);

  const getUser = (token) => {
    auth
      .user({ token })
      .then((result) => {
        result && setUser(result.user);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const login = async ({ email, password }) => {
    const result = await auth.login({ email, password });
    if (result) {
      toLocalStorage(result.accessToken);
      getUser(result.accessToken);
    }
    return result;
  };

  const register = async (body) => {
    setRegistered(false);
    const result = await auth.register(body);
    console.log("useAuth", result);
    if (result) {
      setRegistered(true);
    }
  };

  return { user, login, loading, register, registered };
};
