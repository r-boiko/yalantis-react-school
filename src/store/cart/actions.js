// Types
import {cartTypes} from "./actionTypes";

export function addProductsToCart(payload) {
  return {
    type: cartTypes.ADD_PRODUCTS_TO_CART,
    payload
  };
}

export function decreaseProductsFromCart(payload) {
  return {
    type: cartTypes.DECREASE_PRODUCTS_FROM_CART,
    payload
  };
}

export function removeProductsFromCart(payload) {
  return {
    type: cartTypes.REMOVE_PRODUCTS_FROM_CART,
    payload
  };
}