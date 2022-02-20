import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

function ContextProvider(props) {
  const [allProducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [login, setLogin] = useState(false)

  function addToCart(product) {
    if(login){
      setCartItems((cartArr) => [...cartArr, product]);
    }else{
      alert("Please Login First")
    }
  }

  function removeFromCart(id) {
    setCartItems((cartArr) => cartArr.filter((item) => item.id !== id));
  }

  function emptyCart() {
    setCartItems([])
  }
  
  useEffect(()=>{
      fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data=> setAllProducts(data))
  },[])

  return (
    <Context.Provider
      value={{
        allProducts,
        setAllProducts,
        cartItems,
        addToCart,
        removeFromCart,
        emptyCart,
        setLogin
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
