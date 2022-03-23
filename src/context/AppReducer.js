export default (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVLIST":
      return {
        ...state,
        favList: [action.payload, ...state.favList],
      };
    default:
      return state;
  }
};
