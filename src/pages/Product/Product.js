import "./Product.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { Filter, ProductListing } from "../../components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export function Product() {
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

  useDocumentTitle("Products - Watches World");
  return (
    <>
      <div class="flex">
        <Filter />
        <section class="product-page-container flex flex-col justify-ceneter items-center my-8">
          <div>
            <h1 class="section-heading font-bold border-radius-1 p-2">
              Products
            </h1>
          </div>
          <main className="flex flex-wrap justify-center">
            {products.map(
              ({
                _id,
                title,
                model,
                image,
                originalPrice,
                discountedPrice,
                discount,
                categoryName,
                ratings,
              }) => (
                <ProductListing
                  key={_id}
                  title={title}
                  model={model}
                  image={image}
                  originalPrice={originalPrice}
                  discountedPrice={discountedPrice}
                  discount={discount}
                  categoryName={categoryName}
                  ratings={ratings}
                />
              )
            )}
          </main>
        </section>
      </div>
    </>
  );
}
