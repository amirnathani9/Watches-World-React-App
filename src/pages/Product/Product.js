import "./Product.css";

import { Filter, ProductListing } from "../../components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useProducts, useProductsFilter } from "../../contexts";
import {
  getFilteredCategoryProducts,
  getFilteredPriceProducts,
  getFIlteredRatingProducts,
  getSortedPriceProducts,
} from "../../utilities";

export function Product() {
  const { products } = useProducts();
  const { state } = useProductsFilter();

  const filteredRatingProducts = getFIlteredRatingProducts(
    products,
    state.rating
  );
  const filteredPriceProducts = getFilteredPriceProducts(filteredRatingProducts, state.price);
  const filteredCategoryProducts = getFilteredCategoryProducts(filteredPriceProducts, state.categories);
  const sortedPriceProducts = getSortedPriceProducts(filteredCategoryProducts, state.sortByPrice);

  useDocumentTitle("Products - Watches World");
  return (
    <>
      <div className="flex">
        <Filter />
        <section className="product-page-container flex flex-col justify-ceneter items-center my-8">
          <div>
            <h1 className="section-heading font-bold border-radius-1 p-2">
              Products
            </h1>
          </div>
          <main className="flex flex-wrap justify-center">
            {sortedPriceProducts.map(
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
