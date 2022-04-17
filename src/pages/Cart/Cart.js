import axios from "axios";
import { CartPriceCard, EmptyCart, HorizontalCard } from "../../components";
import { useCart, useWishlist } from "../../contexts";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { encodedToken } from "../../utilities/token";
import "./Cart.css";
export const Cart = () => {
  const { cartItems, setCartItems } = useCart();
  const { setWishlistItems } = useWishlist();

  const removeFromCartHandler = async (productId) => {
    try {
      const response = await axios.delete(`/api/user/cart/${productId}`, {
        headers: { authorization: encodedToken },
      });
      setCartItems(response.data.cart);
    } catch (error) {
      console.log(error);
    }
  };
  const productsQuantityHandler = async (productId, btnType) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: { type: btnType },
        },
        { headers: { authorization: encodedToken } }
      );

      let currProduct = response.data.cart.find(
        (item) => item._id === productId
      );
      if (currProduct.qty < 1) {
        removeFromCartHandler(productId);
      } else {
        setCartItems(response.data.cart);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const moveToWishlistHandler = async (product) => {
    try {
      const respone = await axios.post(
        "/api/user/wishlist",
        { product },
        { headers: { authorization: encodedToken } }
      );
      setWishlistItems(respone.data.wishlist);
      removeFromCartHandler(product._id)
    } catch (error) {
      console.log(error);
    }
  };

  useDocumentTitle("Cart - Watches World");
  return (
    <div>
      {cartItems.length <= 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex flex-col justify-center items-center my-4">
          <h1 className="section-heading font-bold border-radius-1 p-2 my-8">
            My Cart({cartItems.length})
          </h1>

          <div className="cart-main-container section-center flex">
            <section className="cart-cards-section flex flex-col">
              {cartItems.map(
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
                  <HorizontalCard
                    key={_id}
                    _id={_id}
                    title={title}
                    model={model}
                    image={image}
                    originalPrice={originalPrice}
                    discountedPrice={discountedPrice}
                    discount={discount}
                    qty={qty}
                    removeFromCartHandler={removeFromCartHandler}
                    productsQuantityHandler={productsQuantityHandler}
                    moveToWishlistHandler={() =>
                      moveToWishlistHandler({
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
            </section>
            <CartPriceCard />
          </div>
        </div>
      )}
    </div>
  );
};
