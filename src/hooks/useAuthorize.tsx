import { useNavigate } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";
import { createContext, useContext, useMemo } from "react";

type contextShape = {
  token?: string;
  login?: (data: string) => void;
  logout?: () => void;
};

const intialAuth: contextShape = {
  login: () => {},
  token: "",
  logout: () => {},
};
const AuthContext = createContext<contextShape>(intialAuth);

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useLocalStorage("token", null);
  const navigate = useNavigate();

  const login = (data: string) => {
    setToken(data);
    navigate("/");
  };

  const logout = () => {
    setToken(null);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      token,
      login,
      logout,
    }),
    [token]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("use useAuth in AuthProvider");
  }
  return context;
}
