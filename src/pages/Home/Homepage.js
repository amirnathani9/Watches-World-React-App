import "./homepage.css";
import axios from "axios";
import { Brands, Hero } from "../../components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProductsFilter } from "../../contexts";

export function Homepage() {
  const [productCategories, setProductCategories] = useState([]);

  const { dispatch } = useProductsFilter();

  const navigate = useNavigate();

  const navigateToProducts = (categoryName) => {
    dispatch({ type: "CLEAR" });
    dispatch({ type: categoryName.toUpperCase() });
    navigate("/products");
  };

  useEffect(() => {
    (async () => {
      try {
        const categoriesData = await axios.get("/api/categories");
        setProductCategories(categoriesData.data.categories);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useDocumentTitle("Watches World");
  return (
    <>
      <Hero />
      <section className="top-brands-container section-center flex flex-col justify-ceneter items-center my-8">
        <h1 className="section-heading font-bold border-radius-1 my-8 p-2">
          Top Brands
        </h1>
        <main className="flex flex-wrap justify-center">
          {productCategories.map(({ _id, categoryName, image }) => (
            <Brands
              key={_id}
              categoryName={categoryName}
              image={image}
              navigateToProducts={navigateToProducts}
            />
          ))}
        </main>
      </section>
    </>
  );
}
