import React, { useContext, useState } from "react";
import CartItem from "../components/CartItem";
import { Context } from "../Context";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, emptyCart } = useContext(Context);
  const [buttonText, setButtonText] = useState("PLACE ORDER")
  const [message, setMessage] = useState(false);

  const cartElementArr = cartItems.map((itemObj) => (
    <CartItem key={itemObj.id} cartItem={itemObj} />
  ));
  const cartItemPriceArr = cartItems.map((itemObj) => itemObj.totalPrice);
  const sum = cartItemPriceArr.reduce((item1, item2) => item1 + item2, 0);

  function placeOrder() {
    setButtonText("ORDERING...")
    setTimeout(() => {
      setButtonText("PLACE ORDER")
      emptyCart()
      setMessage(true)
    }, 2000);
  }

  return (
    <section className="cart-page">

      {message &&  <p className="order-msg"> Your Order Is Being Placed, Please Visit Again.</p>}

      <div className="cart-heading">
        <h1>Your Shopping cart</h1>
        <h3>
          Total Amount:
          {Math.round(sum).toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </h3>
      </div>

      <div className="cart-list">
        {cartItems.length > 0 ? (
          cartElementArr
        ) : (
          <div>
            <p>Your Cart Is Empty.</p>
            <Link Link to="/">
              <button className="addsome-btn btn">Continue Shopping</button>
            </Link>
          </div>
        )}
      </div>

      <div className="checkout-btn-div">
        <button className="checkout-btns btn" onClick={emptyCart}>
          EMPTY CART
        </button>
        <button className="checkout-btns btn" onClick={placeOrder}>{buttonText}</button>
      </div>
      
    </section>
  );
}
