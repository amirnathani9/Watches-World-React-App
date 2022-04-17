import "./Wishlist.css"
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export const Wishlist = () => {
  useDocumentTitle("Wishlist - Watches World");
  return (
    <section className="section-center flex flex-col justify-ceneter items-center my-4">
      <h1 className="section-heading font-bold border-radius-1 p-2 my-8">
        My Wishlist
      </h1>
      <main className="wishlist-container flex flex-wrap justify-center">
        <div className="card card-horizontal card-shadow border-radius-1 m-8">
          <div className="card-horizontal-image">
            <img
              src="https://nomark-ui.netlify.app/assests/card-image.jpeg"
              alt="watches"
              className="card-img"
            />
          </div>
          <div className="card-content ">
            <div className="card-heading">
              <h3>Tag Heuer-CR7</h3>
            </div>
            <div className="card-product-price">
              <span className="product-discount-price">₹4,999.00</span>
              <span className="product-original-price">₹9,999.00</span>
            </div>
            <div className="product-discount-percent">50% Discount</div>
            <button className="card-btn">
              <i className="fas fa-shopping-cart card-btn-icon"></i>Move To Cart
            </button>
            <button className="card-secondary-btn">Remove from Wishlist</button>
          </div>
        </div>
      </main>
    </section>
  );
}
