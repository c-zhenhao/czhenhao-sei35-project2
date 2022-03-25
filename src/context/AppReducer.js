const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVLIST":
      return {
        ...state,
        favList: [...state.favList, action.payload],
      };
    case "REMOVE_FROM_FAVLIST":
      return {
        ...state,
        favList: state.favList.filter((drink) => drink.id !== action.payload),
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartList: state.cartList.filter((drink) => drink.id !== action.payload),
      };
    default:
      return state;
  }
};

export default AppReducer;
