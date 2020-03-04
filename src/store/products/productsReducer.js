// Types
import {productsTypes} from "./actionTypes";

export const initialState = {
  items: [],
  pending: false,
  page: 1,
  perPage: 50,
  totalItems: 225,
  origins: {
    items: [],
    padding: false
  }
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case productsTypes.SET_PRODUCTS: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case productsTypes.SET_PRODUCTS_ORIGINS: {
      return {
        ...state,
        origins: action.payload
      }
    }
    default:
      return state;
  }
}