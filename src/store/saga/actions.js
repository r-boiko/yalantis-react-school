// Types
import {types} from "./types";

export function getDataFromLocalStorage(data) {
  return {
    type: types.GET_DATA_FROM_LOCAL_STORAGE,
    payload: data
  };
}

export function getProductsAsync(data) {
  return {
    type: types.GET_PRODUCTS_ASYNC,
    payload: data
  };
}

export function getProductsOriginsAsync(data) {
  return {
    type: types.GET_PRODUCTS_ORIGINS_ASYNC,
    payload: data
  };
}