import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductsContext = createContext(null);

const useProducts = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const productsData = await axios.get("/api/products");
        setProducts(productsData.data.products);
      } catch (error) {
        console.log(error);
      }
    })();
  });

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { useProducts, ProductsProvider };
