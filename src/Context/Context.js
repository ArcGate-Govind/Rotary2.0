import { createContext, useContext, useState } from "react";

export const AuthDataContext = createContext(null);
const initialAuthData = {};

const AuthDataProvider = (props) => {
  const [authData, setAuthData] = useState(initialAuthData);
  console.log("authData",authData)

  const onLogin = (response) => {
    setAuthData(response);
  };

  return (
    <AuthDataContext.Provider
      value={{
        ...authData,
        onLogin,
      }}
      {...props}
    />
  );
};

export const useAuth = () => useContext(AuthDataContext);
export default AuthDataProvider;
