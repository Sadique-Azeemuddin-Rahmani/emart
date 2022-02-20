import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../Context";

export default function ProductDetail() {
  const { productId } = useParams();
  const { allProducts, setAllProducts, addToCart, removeFromCart, cartItems } =
    useContext(Context);
  const [count, setCount] = useState(1);

  const thisProduct = allProducts.find((product) => product.id == productId);
  const itemPrice = Math.round(thisProduct.price) * count;

  useEffect(() => {
    setAllProducts((productArr) =>
      productArr.map((item) =>
        item.id === thisProduct.id
          ? {
              ...item,
              totalPrice: itemPrice,
            }
          : item
      )
    );
  }, [itemPrice]);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function cartButtons() {
    const inCart = cartItems.some((item) => item.id === thisProduct.id);
    if (inCart) {
      return (
        <button
          className="cart-btn btn"
          onClick={() => {
            removeFromCart(thisProduct.id);
          }}
        >
          Remove From Cart
        </button>
      );
    } else {
      return (
        <button
          className="cart-btn btn"
          onClick={() => {
            addToCart(thisProduct);
          }}
        >
          Add to Cart
        </button>
      );
    }
  }

  return (
    <section className="productdetail-container">
      <span className="productImg-div">
        <img
          className="product-img"
          src={thisProduct.image}
          alt="Product Image"
        />
      </span>

      <div className="productDetail-div">
        <h1 className="product-title margin-bottom">{thisProduct.title}</h1>

        <div className="product-priceCount margin-bottom">
          <h4 className="product-price">
            {itemPrice.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </h4>
          <div className="count-btn-div">
            Quantity:
            <button
              className="count-btn"
              onClick={decrement}
              disabled={count > 1 ? false : true}
            >
              -
            </button>
            <span>{count}</span>
            <button className="count-btn" onClick={increment}>
              +
            </button>
          </div>
        </div>

        <p className="margin-bottom">{thisProduct.description}</p>

        <div className="cart-btn-div">
          <Link to="/">
            <button className="cart-btn btn">Back</button>
          </Link>
          {cartButtons()}
        </div>
        
      </div>
    </section>
  );
}
