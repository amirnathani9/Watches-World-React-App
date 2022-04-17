import {useCart} from "../../contexts/cart-context"

export const CartPriceCard = () => {
  const {cartItems} = useCart()

  const deliveryCharges = 499
  const amount = cartItems.reduce((acc,curr)=>acc + Number(curr.originalPrice)* curr.qty,0).toFixed(2)
  const discount = cartItems.reduce((acc,curr)=>acc + Number(curr.originalPrice*10/100) * curr.qty,0).toFixed(2)
  const totalAmount =( amount - discount + deliveryCharges ).toFixed(2)

  return (
    <section className="cart-price-section flex flex-col items-center">
      <div className="card-price-container flex flex-col border-radius-2 m-8 p-8">
        <h2 className="font-bold my-3">Price Details</h2>

        <div className="flex justify-between font-bold my-3">
          <span>Price (Items: {cartItems.length})</span>
          <span>₹{amount}</span>
        </div>
        <div className="flex justify-between my-3">
          <span>Discount</span>
          <span>₹{discount}</span>
        </div>
        <div className="flex justify-between my-3">
          <span>Delivery Charges</span>
          <span>₹{deliveryCharges}</span>
        </div>
        <div className="flex justify-between font-bold my-3">
          <span>Total Amount</span>
          <span>₹{totalAmount}</span>
        </div>
        <p className="my-3">You will save Rs ₹{discount} on this order</p>
        <button className="btn primary-outline-btn font-size-5 border-radius-1">
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
};
