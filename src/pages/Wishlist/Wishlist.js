import "./Wishlist.css";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

import { EmptyWishlist, WishlistCard } from "../../components";
import { useCart, useWishlist } from "../../contexts";
import axios from "axios";
import { encodedToken } from "../../utilities/token";
import { removeFromWishlistHandler } from "../../utilities/wishlist/removeFromWishlist";

export const Wishlist = () => {
  const { wishlistItems, setWishlistItems } = useWishlist();
  const { setCartItems } = useCart();

  const moveToCartHandler = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product },
        { headers: { authorization: encodedToken } }
      );
      setCartItems(response.data.cart);
      removeFromWishlistHandler(product._id, setWishlistItems);
    } catch (error) {
      console.log(error);
    }
  };

  useDocumentTitle("Wishlist - Watches World");
  return (
    <div>
      {wishlistItems.length<=0 ? (
        <EmptyWishlist />
      ) : (
        <section className="section-center flex flex-col justify-ceneter items-center my-4">
          <h1 className="section-heading font-bold border-radius-1 p-2 my-8">
            My Wishlist ({wishlistItems.length})
          </h1>
          <div>
            {wishlistItems.map(
              ({
                _id,
                title,
                model,
                image,
                originalPrice,
                discountedPrice,
                discount,
                qty,
              }) => (
                <WishlistCard
                  key={_id}
                  _id={_id}
                  title={title}
                  model={model}
                  image={image}
                  originalPrice={originalPrice}
                  discountedPrice={discountedPrice}
                  discount={discount}
                  moveToCartHandler={() =>
                    moveToCartHandler({
                      _id,
                      title,
                      model,
                      image,
                      originalPrice,
                      discountedPrice,
                      discount,
                      qty,
                    })
                  }
                />
              )
            )}
          </div>
        </section>
      )}
    </div>
  );
};
