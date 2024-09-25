import React, { createContext, useContext, useState, useEffect} from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const authorizationToken = `Bearer${token}`

  const storeTokenInLs = (serverToken) => {
    setToken(serverToken)
    localStorage.setItem("token", serverToken)
  }

  const isLoggedIn = !!token

  const LogoutUser = () => {
    setToken("")
    localStorage.removeItem("token")
  }

  return (
    <AuthContext.Provider value={[isLoggedIn, storeTokenInLs, LogoutUser, authorizationToken]}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
