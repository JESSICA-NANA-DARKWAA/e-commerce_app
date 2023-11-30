import React, { createContext, useState, useReducer, useEffect } from "react";
let storedCart = localStorage.getItem("cart");
if (storedCart) storedCart = JSON.parse(storedCart);
export const AppContext = createContext({ cart: storedCart || [] });

const AppContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        console.log(action);

        return {
          cart:
            action.payload?.length > 0
              ? [action.payload, ...state.cart]
              : [action.payload],
        };

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
