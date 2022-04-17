export const HorizontalCard = ({
  _id,
  title,
  model,
  image,
  originalPrice,
  discountedPrice,
  discount,
  qty,
  removeFromCartHandler,
  productsQuantityHandler
}) => {
  return (
    <div className="card card-horizontal card-shadow border-radius-1 m-8">
      <div className="card-horizontal-image">
        <img src={image} alt={model} className="card-img border-radius-1" />
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
          <span className="quantity-remove" >
            <i className="fas fa-minus" onClick={()=>productsQuantityHandler(_id,"decrement")}></i>
          </span>
          <span className="card-quantity font-bold">{qty}</span>
          <span className="quantity-add">
            <i className="fa fa-plus" onClick={()=>productsQuantityHandler(_id, "increment")}></i>
          </span>
        </div>
        <button className="card-btn font-size-4 border-radius-1">
          <i className="fas fa-shopping-cart card-btn-icon"></i>
          Move To wishlist
        </button>
        <button className="card-secondary-btn font-size-4 border-radius-1" onClick={()=>removeFromCartHandler(_id) }>
          Remove from Cart
        </button>
      </div>
    </div>
  );
};
