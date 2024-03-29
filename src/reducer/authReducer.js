export const authReducer = (state, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return {
        ...state,
        isAuth: action.payload.isAuth,
        user: action.payload.user,
        encodedToken: action.payload.encodedToken,
      };
    case "LOGOUT": {
      return { ...state, isAuth: false, user: "", encodedToken: "" };
    }
    default:
      return state;
  }
};
