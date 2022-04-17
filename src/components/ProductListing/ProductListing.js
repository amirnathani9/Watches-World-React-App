import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts";

export function ProductListing({
  _id,
  title,
  model,
  image,
  originalPrice,
  discountedPrice,
  discount,
  categoryName,
  ratings,
  addToCartHandler,
  addToWishlistHandler
}) {
  const { cartItems } = useCart();
  const navigate =useNavigate()
  return (
    <>
      <div className="card card-vertical border-radius-1 m-8">
        <div className="card-vertical-image">
          <img src={image} alt={model} className="card-img border-radius-1" />
          <i className="far fa-heart wishlist-icon" onClick={addToWishlistHandler}></i>
          <span className="card-image-badge">
            {ratings}
            <i className="fa fa-star" aria-hidden="true"></i>
          </span>
        </div>
        <div className="card-content">
          <div className="card-heading">
            <h3>{title}</h3>
            <p>{model}</p>
          </div>
          <div className="card-product-price">
            <span className="product-discount-price">₹{discountedPrice}</span>
            <span className="product-original-price">₹{originalPrice}</span>
          </div>
          <div className="product-discount-percent">{discount} discount</div>

          {cartItems.find((e) => e._id === _id) ? (
            <button className="card-btn border-radius-1" onClick={()=>navigate("/cart")}>
              <i className="fas fa-shopping-cart card-btn-icon"></i>Go To Cart
            </button>
          ) : (
            <button
              className="card-btn border-radius-1"
              onClick={addToCartHandler}
            >
              <i className="fas fa-shopping-cart card-btn-icon"></i>Add To Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
}
