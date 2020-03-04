// Types
import {cartTypes} from '../actionTypes';

// Actions
import {addProductsToCart, decreaseProductsFromCart, removeProductsFromCart} from "../actions";

describe('products actions', () => {
  it('addProductsToCart', () => {
    expect(addProductsToCart({})).toEqual({
      type: cartTypes.ADD_PRODUCTS_TO_CART,
      payload: {}
    });
  });

  it('decreaseProductsFromCart', () => {
    expect(decreaseProductsFromCart({})).toEqual({
      type: cartTypes.DECREASE_PRODUCTS_FROM_CART,
      payload: {}
    });
  });

  it('removeProductsFromCart', () => {
    expect(removeProductsFromCart({})).toEqual({
      type: cartTypes.REMOVE_PRODUCTS_FROM_CART,
      payload: {}
    });
  });
});