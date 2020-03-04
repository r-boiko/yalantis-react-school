// Actions
import {addProductsToCart, decreaseProductsFromCart, removeProductsFromCart} from "../actions";

// Reducer
import cartReducer from "../cartReducer";

describe('cart reducer', () => {
  const initialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
  };

  it('ADD_PRODUCTS_TO_CART', () => {
    const action = addProductsToCart({
      id: "1",
      name: "Fantastic Frozen Pizza",
      price: 103,
      origin: "asia",
      createdAt: "2020-01-31T09:31:06.993Z",
      updatedAt: "2020-01-31T09:31:06.993Z",
      count: 2
    });
    const newState = cartReducer(initialState, action);
    expect(newState.items[0].id).toBe("1");
  });

  it('DECREASE_PRODUCTS_FROM_CART', () => {
    const action = decreaseProductsFromCart({id: "1"});
    const newState = cartReducer(initialState, action);
    expect(newState.items[0].count).toBe(1)
  });

  it('REMOVE_PRODUCTS_FROM_CART', () => {
    const action = removeProductsFromCart({id: "1"});
    const newState = cartReducer(initialState, action);
    expect(newState.items.length).toBe(0)
  });
});