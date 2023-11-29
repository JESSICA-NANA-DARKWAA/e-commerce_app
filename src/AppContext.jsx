import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  let storedCart = localStorage.getItem("cart");
  if (storedCart) storedCart = JSON.parse(storedCart);

  const [appState, setAppState] = useState({
    cart: storedCart || [],
  });

  const addToCart = (product) => {
    setAppState({ ...appState, cart: [...appState.cart, product] });

    //store item in cart
    let storedCart = localStorage.getItem("cart");
    if (storedCart) {
      storedCart = JSON.parse(storedCart);
    } else {
      storedCart = [];
    }
    storedCart.push(product);
    localStorage.setItem("cart", JSON.stringify(storedCart));
  };
  return (
    <AppContext.Provider value={{ ...appState, addToCart: addToCart }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
