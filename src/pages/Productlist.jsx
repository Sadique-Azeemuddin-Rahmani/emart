import React, { useContext } from "react";
import Product from "../components/Product";
import { Context } from "../Context";

export default function Productlist() {
  const { allProducts } = useContext(Context);

  const productElement = allProducts.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <section>
      <h2 className="section-heading">Trending Products</h2>
      <div className="product-list">
        {allProducts.length > 0 ? (
          productElement
        ) : (
          <h4>Loading Content . . .</h4>
        )}
      </div>
    </section>
  );
}
