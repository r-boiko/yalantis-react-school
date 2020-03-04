// Types
import {productsTypes} from '../actionTypes';

// Actions
import {setProducts, setProductsOrigins} from "../actions";

describe('products actions', () => {
  it('setProducts', () => {
    expect(setProducts({})).toEqual({
      type: productsTypes.SET_PRODUCTS,
      payload: {}
    });
  });

  it('setProductsOrigins', () => {
    expect(setProductsOrigins({})).toEqual({
      type: productsTypes.SET_PRODUCTS_ORIGINS,
      payload: {}
    });
  });
});