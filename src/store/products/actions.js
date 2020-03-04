// Types
import {productsTypes} from "./actionTypes";

export function setProducts(data) {
  return {
    type: productsTypes.SET_PRODUCTS,
    payload: data
  };
}

export function setProductsOrigins(data) {
  return {
    type: productsTypes.SET_PRODUCTS_ORIGINS,
    payload: data
  };
}