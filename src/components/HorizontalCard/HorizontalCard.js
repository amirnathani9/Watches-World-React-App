export const HorizontalCard = ({
  _id,
  title,
  model,
  image,
  originalPrice,
  discountedPrice,
  discount,
  qty,
}) => {
  return (
    <div className="card card-horizontal card-shadow border-radius-1 m-8">
      <div className="card-horizontal-image">
        <img src={image} alt="watches" className="card-img border-radius-1" />
      </div>
      <div className="card-content">
        <div className="card-heading">
          <h3>{title}</h3>
          <p>{model}</p>
        </div>
        <div className="card-product-price">
          <span className="product-discount-price">Rs.{discountedPrice}</span>
          <span className="product-original-price">Rs.{originalPrice}</span>
        </div>
        <div className="flex mb-3 items-center">
          <span>Quantity: </span>
          <span className="quantity-remove">
            <i className="fa fa-minus"></i>
          </span>
          <span className="card-quantity font-bold">{qty}</span>
          <span className="quantity-add">
            <i className="fa fa-plus"></i>
          </span>
        </div>
        <button className="card-btn font-size-4 border-radius-1">
          <i className="fas fa-shopping-cart card-btn-icon"></i>
          Move To wishlist
        </button>
        <button className="card-secondary-btn font-size-4 border-radius-1">
          Remove from Cart
        </button>
      </div>
    </div>
  );
};
