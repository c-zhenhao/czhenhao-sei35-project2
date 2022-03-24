import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  favList: localStorage.getItem("favList")
    ? JSON.parse(localStorage.getItem("favList"))
    : [],
  cartList: localStorage.getItem("cartList")
    ? JSON.parse(localStorage.getItem("cartList"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// create global provider to allow access
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favList", JSON.stringify(state.favList));
    localStorage.setItem("cartList", JSON.stringify(state.cartList));
  }, [state]);

  // actions
  function addDrinksToFavList(drink) {
    console.log(drink);
    dispatch({ type: "ADD_TO_FAVLIST", payload: drink });
    console.log("added to favourites!");
  }

  function removeDrinksFromFavList(id) {
    console.log(id);
    dispatch({ type: "REMOVE_FROM_FAVLIST", payload: id });
    console.log("remove from favourites!");
  }

  function addToCart(drink) {
    console.log(drink);
    dispatch({ type: "ADD_TO_CART", payload: drink });
    console.log("added to cart!");
  }

  function removeFromCart(id) {
    console.log(id);
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
    console.log("remove from cart!");
  }

  return (
    <GlobalContext.Provider
      value={{
        favList: state.favList,
        cartList: state.cartList,
        addDrinksToFavList,
        removeDrinksFromFavList,
        addToCart,
        removeFromCart,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
