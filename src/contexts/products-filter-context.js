import { createContext, useContext, useReducer } from "react";
import { productsFilterReducer } from "../reducer";




const ProductsFilterContext = createContext("");

const useProductsFilter = () => useContext(ProductsFilterContext);
const initialFilterValue = {
  sortByPrice: "",
  categories: {
    Rolex: false,
    Hublot: false,
    Rado: false,
    Tagheuer: false,
    Tissot: false,
    Cartier: false,
  },
  price: 100000,
  rating: 0,
};

const ProductsFilterProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(
    productsFilterReducer,
    initialFilterValue
  );

  return (
    <ProductsFilterContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsFilterContext.Provider>
  );
};

export { useProductsFilter, ProductsFilterProvider };
