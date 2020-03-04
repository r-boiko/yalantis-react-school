// Actions
import {setProducts, setProductsOrigins} from "../actions";

// Reducer
import productsReducer from "../productsReducer";

describe('products reducer', () => {
  const initialState = {
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

  it('SET_PRODUCTS', () => {
    const action = setProducts({pending: false, items: [{a: 1}]});
    const newState = productsReducer(initialState, action);
    expect(newState.items.length).not.toBe(0);
    expect(newState.pending).toBe(false);
  });

  it('SET_PRODUCTS_ORIGINS', () => {
    const action = setProductsOrigins({pending: false, items: [{a: 1}]});
    const newState = productsReducer(initialState, action);
    expect(newState.origins.items.length).not.toBe(0);
    expect(newState.origins.pending).toBe(false);
  });
});