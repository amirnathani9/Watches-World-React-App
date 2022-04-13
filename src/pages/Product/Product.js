import "./Product.css";

import { Filter, ProductListing } from "../../components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useProducts } from "../../contexts";

export function Product() {
  const { products } = useProducts();

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
