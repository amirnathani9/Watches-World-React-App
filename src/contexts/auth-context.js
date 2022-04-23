import { createContext, useEffect, useReducer, useContext } from "react";

import { authReducer } from "../reducer";

const initialAuthReducerValue = { isAuth: false, user: "", encodedToken: "" };

const AuthContext = createContext(initialAuthReducerValue);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(
    authReducer,
    initialAuthReducerValue
  );

  useEffect(() => {
    authDispatch({
      type: "AUTH_SUCCESS",
      payload: {
        user: JSON.parse(localStorage.getItem("user")),
        encodedToken: localStorage.getItem("token"),
      },
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
