import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  favList: [],
};

// create context
export const GlobalContext = createContext(initialState);

// create global provider to allow access
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

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

  return (
    <GlobalContext.Provider
      value={{
        favList: state.favList,
        addDrinksToFavList,
        removeDrinksFromFavList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
