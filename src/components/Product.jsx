import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {

  return (
    <Link to={`/${product.id}`}>
    <div className="product" >

      <div className="img-container">
        <img className="productCard-img" src={product.image} alt="Product Image" />
        <div className="productCard-stats">
          <img
            className="stats-img"
            src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            alt="Rating Star Image"
          />
          <span>{product.rating.rate}</span>
          <span>| {product.rating.count}</span>
        </div>
      </div>

      <p className="productCard-title">{product.title}</p>
      
      <div>
        <span>
          { Math.round(product.price).toLocaleString("en-IN", { style: "currency", currency: "INR" })}
        </span>
      </div>
    </div>
    </Link>
  );
}
