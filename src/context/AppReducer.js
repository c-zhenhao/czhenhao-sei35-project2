export default (state, action) => {
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
    default:
      return state;
  }
};
