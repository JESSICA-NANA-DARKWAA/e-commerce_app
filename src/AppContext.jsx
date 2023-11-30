import React, { createContext, useState, useReducer, useEffect } from "react";
let storedCart = localStorage.getItem("cart");
if (storedCart) storedCart = JSON.parse(storedCart);
export const AppContext = createContext({ cart: storedCart || [] });


const findItem = (existingItems, item) => {
  return existingItems.find((value) => (value.id == item.id))
}
const AppContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        if (state.cart.length === 0 || !findItem(state.cart, action.payload)) {
          return {
            cart: [
              ...state.cart,
              action.payload
            ]
          };
        }
        return state;

      default:
        return state;
    }
  };
  const [appState, setAppState] = useReducer(reducer, {
    cart: storedCart || [],
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(appState?.cart));
  }, [JSON.stringify(appState)]);
  /* const addToCart = (product) => {
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
  };*/
  return (
    <AppContext.Provider value={{ ...appState, dispatch: setAppState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
