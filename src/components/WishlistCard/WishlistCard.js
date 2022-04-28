import { useToast } from "../../hooks";
import { useAuth, useWishlist } from "../../contexts";
import { removeFromWishlistHandler } from "../../utilities/wishlist/removeFromWishlist";

export const WishlistCard = ({
  _id,
  title,
  model,
  image,
  originalPrice,
  discountedPrice,
  discount,
  moveToCartHandler,
}) => {
  const { setWishlistItems } = useWishlist();
  const {
    authState: { encodedToken },
  } = useAuth();
  const { showToast } = useToast();
  return (
    <main className="wishlist-container flex flex-wrap justify-center">
      <div className="card card-horizontal card-shadow border-radius-1 m-8">
        <div className="card-horizontal-image">
          <img src={image} alt={model} className="card-img" />
        </div>
        <div className="card-content ">
          <div className="card-heading">
            <h3>{title}</h3>
            <p>{model}</p>
          </div>
          <div className="card-product-price">
            <span className="product-discount-price">₹{discountedPrice}</span>
            <span className="product-original-price">₹{originalPrice}</span>
          </div>
          <div className="product-discount-percent">{discount} Discount</div>
          <button className="card-btn" onClick={moveToCartHandler}>
            <i className="fas fa-shopping-cart card-btn-icon"></i>Move To Cart
          </button>
          <button
            className="card-secondary-btn"
            onClick={() =>
              removeFromWishlistHandler(
                _id,
                setWishlistItems,
                encodedToken,
                showToast
              )
            }
          >
            Remove from Wishlist
          </button>
        </div>
      </div>
    </main>
  );
};
