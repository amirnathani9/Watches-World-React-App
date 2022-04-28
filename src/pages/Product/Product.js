import "./Product.css";
import { useEffect } from "react";
import { Filter, ProductListing } from "../../components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import {
  useAuth,
  useCart,
  useProducts,
  useProductsFilter,
  useWishlist,
} from "../../contexts";
import {
  getFilteredCategoryProducts,
  getFilteredPriceProducts,
  getFIlteredRatingProducts,
  getSortedPriceProducts,
} from "../../utilities";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks";

export function Product() {
  const { products } = useProducts();
  const { state } = useProductsFilter();
  const { sortByPrice, categories, price, rating } = state;
  const { setCartItems } = useCart();
  const { setWishlistItems } = useWishlist();
  const {
    authState: { encodedToken },
  } = useAuth();
  const navigate = useNavigate();

  const { showToast } = useToast();

  const addToCartHandler = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product },
        { headers: { authorization: encodedToken } }
      );
      setCartItems(response.data.cart);
      showToast("Item Added to Cart!", "success");
    } catch (error) {
      showToast("You are Not Logged In!", "error");
      navigate("/login");
    }
  };
  const addToWishlistHandler = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product },
        { headers: { authorization: encodedToken } }
      );
      setWishlistItems(response.data.wishlist);
      showToast("Item Added to Wishlist!", "success");
    } catch (error) {
      showToast("You are Not Logged In!", "error");
      navigate("/login");
    }
  };

  const filteredRatingProducts = getFIlteredRatingProducts(products, rating);
  const filteredPriceProducts = getFilteredPriceProducts(
    filteredRatingProducts,
    price
  );
  const filteredCategoryProducts = getFilteredCategoryProducts(
    filteredPriceProducts,
    categories
  );
  const sortedPriceProducts = getSortedPriceProducts(
    filteredCategoryProducts,
    sortByPrice
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                  _id={_id}
                  title={title}
                  model={model}
                  image={image}
                  originalPrice={originalPrice}
                  discountedPrice={discountedPrice}
                  discount={discount}
                  categoryName={categoryName}
                  ratings={ratings}
                  addToCartHandler={() =>
                    addToCartHandler({
                      _id,
                      title,
                      model,
                      image,
                      originalPrice,
                      discountedPrice,
                      discount,
                    })
                  }
                  addToWishlistHandler={() =>
                    addToWishlistHandler({
                      _id,
                      title,
                      model,
                      image,
                      originalPrice,
                      discountedPrice,
                      discount,
                    })
                  }
                />
              )
            )}
          </main>
        </section>
      </div>
    </>
  );
}
