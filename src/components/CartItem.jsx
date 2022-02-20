import React, { useContext } from "react";
import { Context } from "../Context";

export default function CartItem({ cartItem }) {
    const { removeFromCart } = useContext(Context);
    const itemPrice = cartItem.totalPrice ;

    return (
        <div className="cart-item">
            
            <div className="img-container">
                <img
                    src={cartItem.image}
                    className="cartItem-img"
                    alt="Cart Item Image"
                />
            </div>

            <h4 className="cart-item-title">{cartItem.title}</h4>

            <div className="cart-item-price">
                {Math.round(itemPrice).toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                })}
                <button
                    className="btn"
                    onClick={() => removeFromCart(cartItem.id)}
                >
                    REMOVE
                </button>
            </div>

        </div>
    );
}
