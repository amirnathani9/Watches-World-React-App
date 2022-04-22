import { createContext, useEffect, useReducer, useContext } from "react";

import { authReducer } from "../reducer";

const initialAuthReducerValue = { isAuth: false, user: "", encodedToken: "" };

const AuthContext = createContext(initialAuthReducerValue);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthReducerValue);

  useEffect(() => {
    dispatch({
      type: "AUTH_SUCCESS",
      payload: {
        user: JSON.parse(localStorage.getItem("user")),
        encodedToken: localStorage.getItem("token"),
      },
    });
  });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
