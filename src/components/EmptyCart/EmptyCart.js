import { Link } from "react-router-dom";

export const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center my-4">
      <h1 className="section-heading font-bold border-radius-1 p-2 my-8">
        My Cart
      </h1>
      <h2>Cart Is Empty</h2>
      <Link to="/products">
      <button className="btn primary-outline-btn font-size-5 border-radius-1">
        Go To Products
      </button>
      </Link>
      
    </div>
  );
};
