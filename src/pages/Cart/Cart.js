import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import "./Cart.css";
export function Cart() {
  useDocumentTitle("Cart - Watches World");
  return (
    <div class="flex flex-col justify-center items-center my-4">
      <h1 class="section-heading font-bold border-radius-1 p-2 my-8">
        My Cart
      </h1>
      <div class="cart-main-container section-center flex">
        <section class="cart-cards-section flex flex-col">
          <div class="card card-horizontal card-shadow border-radius-1 m-8">
            <div class="card-horizontal-image">
              <img
                src="https://nomark-ui.netlify.app/assests/card-image.jpeg"
                alt="watches"
                class="card-img border-radius-1"
              />
            </div>
            <div class="card-content">
              <div class="card-heading">
                <h3>Tag Heuer-CR7</h3>
              </div>
              <div class="card-product-price">
                <span class="product-discount-price">₹4,999.00</span>
                <span class="product-original-price">₹9,999.00</span>
              </div>
              <div class="flex mb-3 items-center">
                <span>Quantity: </span>
                <span class="quantity-remove"></span>
                <span class="card-quantity">1</span>
                <span class="quantity-add"> </span>
              </div>
              <button class="card-btn font-size-4 border-radius-1">
                <i class="fas fa-shopping-cart card-btn-icon"></i>
                Move To wishlist
              </button>
              <button class="card-secondary-btn font-size-4 border-radius-1">
                Remove from Cart
              </button>
            </div>
          </div>
          <div class="card card-horizontal card-shadow border-radius-1 m-8">
            <div class="card-horizontal-image">
              <img
                src="https://nomark-ui.netlify.app/assests/card-image.jpeg"
                alt="watches"
                class="card-img border-radius-1"
              />
            </div>
            <div class="card-content">
              <div class="card-heading">
                <h3>Tag Heuer-CR7</h3>
              </div>
              <div class="card-product-price">
                <span class="product-discount-price">₹4,999.00</span>
                <span class="product-original-price">₹9,999.00</span>
              </div>
              <div class="flex mb-3 items-center">
                <span>Quantity: </span>
                <span class="quantity-remove"></span>
                <span class="card-quantity">1</span>
                <span class="quantity-add"> </span>
              </div>
              <button class="card-btn font-size-4 border-radius-1">
                <i class="fas fa-shopping-cart card-btn-icon"></i>
                Move To wishlist
              </button>
              <button class="card-secondary-btn font-size-4 border-radius-1">
                Remove from Cart
              </button>
            </div>
          </div>
        </section>
        <section class="cart-price-section flex flex-col items-center">
          <div class="card-price-container flex flex-col border-radius-2 m-8 p-8">
            <h2 class="font-bold my-3">Price Details</h2>

            <div class="flex justify-between font-bold my-3">
              <span>Price</span>
              <span>₹9,999.00</span>
            </div>
            <div class="flex justify-between my-3">
              <span>Discount</span>
              <span>₹4,999.00</span>
            </div>
            <div class="flex justify-between my-3">
              <span>Delivery Charges</span>
              <span>₹999.00</span>
            </div>
            <div class="flex justify-between font-bold my-3">
              <span>Total Amount</span>
              <span>₹5,998.00</span>
            </div>
            <p class="my-3">You will save Rs ₹4,999.00 on this order</p>
            <button class="btn primary-outline-btn font-size-5 border-radius-1">
              Proceed to Checkout
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
