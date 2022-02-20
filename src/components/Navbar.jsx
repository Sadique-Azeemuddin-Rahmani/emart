import React, { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import { BsCart, BsFillCartFill } from "react-icons/bs";
import logo from "../logo.jpg";

export default function Navbar() {
  const { cartItems } = useContext(Context);

  return (
    <nav className="nav">
      <img className="logo" src={logo} alt="logo" />

      <h1 className="header-title">
        <Link to="/">Emart</Link>
      </h1>

      <Link to="/login">
        <p className="header-login">login</p>
      </Link>

      <Link to="/cart">
        <h4>
          {cartItems.length > 0 ? (
            <BsFillCartFill className="header-cartfill-icon" />
          ) : (
            <BsCart className="header-cart-icon" />
          )}
          <sup>({cartItems.length})</sup>
        </h4>
      </Link>
      
    </nav>
  );
}
