import axios from "axios";
import { CartPriceCard, EmptyCart, HorizontalCard } from "../../components";
import { useCart } from "../../contexts";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { encodedToken } from "../../utilities/token";
import "./Cart.css";
export function Cart() {
  const { cartItems, setCartItems } = useCart();

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
}
