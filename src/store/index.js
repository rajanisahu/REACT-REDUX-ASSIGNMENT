import { createStore } from "redux";

const initialState = {
  products: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        )
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        )
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
