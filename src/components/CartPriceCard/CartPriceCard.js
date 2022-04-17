export const CartPriceCard = () => {
  return (
    <section className="cart-price-section flex flex-col items-center">
      <div className="card-price-container flex flex-col border-radius-2 m-8 p-8">
        <h2 className="font-bold my-3">Price Details</h2>

        <div className="flex justify-between font-bold my-3">
          <span>Price</span>
          <span>₹9,999.00</span>
        </div>
        <div className="flex justify-between my-3">
          <span>Discount</span>
          <span>₹4,999.00</span>
        </div>
        <div className="flex justify-between my-3">
          <span>Delivery Charges</span>
          <span>₹999.00</span>
        </div>
        <div className="flex justify-between font-bold my-3">
          <span>Total Amount</span>
          <span>₹5,998.00</span>
        </div>
        <p className="my-3">You will save Rs ₹4,999.00 on this order</p>
        <button className="btn primary-outline-btn font-size-5 border-radius-1">
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
};
