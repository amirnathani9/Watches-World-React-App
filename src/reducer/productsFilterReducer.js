export const productsFilterReducer = (state, action) => {
  switch (action.type) {
    case "PRICE_LOW_TO_HIGH":
      return { ...state, sortByPrice: action.type };
    case "PRICE_HIGH_TO_LOW":
      return { ...state, sortByPrice: action.type };
    case "ROLEX":
      return {
        ...state,
        categories: { ...state.categories, Rolex: !state.categories.Rolex },
      };
    case "HUBLOT":
      return {
        ...state,
        categories: { ...state.categories, Hublot: !state.categories.Hublot },
      };
    case "RADO":
      return {
        ...state,
        categories: { ...state.categories, Rado: !state.categories.Rado },
      };
    case "TAGHEUER":
      return {
        ...state,
        categories: {
          ...state.categories,
          Tagheuer: !state.categories.Tagheuer,
        },
      };
    case "TISSOT":
      return {
        ...state,
        categories: { ...state.categories, Tissot: !state.categories.Tissot },
      };
    case "CARTIER":
      return {
        ...state,
        categories: {
          ...state.categories,
          Cartier: !state.categories.Cartier,
        },
      };
    case "PRICE":
      return { ...state, price: action.value };
    case "RATING":
      return { ...state, rating: action.value };
    default:
      return state;
  }
};
