import React, { createContext, useState, useReducer, useEffect } from "react";
import { MdOutlineCallToAction } from "react-icons/md";
let storedCart = localStorage.getItem("cart");
if (storedCart) storedCart = JSON.parse(storedCart);
export const AppContext = createContext({ cart: storedCart || [] });

const findItem = (existingItems, item) => {
  return existingItems.find((value) => value.id == item.id);
};
const AppContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCRE":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      case "DECRE":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, count: item.count - 1 }
              : item
          ),
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

  /*decreaseCart(state,action){
    const itemIndex = state.cartItems.findIndex(
      cartItem=>cartItem.id === action.payload.id
    )
    if(state.cartitems[itemIndex].cartQuantity>1){
state.cartItem[itemIndex].cartQuantity-=


    }
  }*/

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
