// Types
import {cartTypes} from "./actionTypes";

export const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

function addToCart(item, items) {
  let updateItems = items;
  if (items.length === 0) {
    updateItems.push({
      ...item,
      count: 1
    });
  } else {
    const index = updateItems.findIndex(({id}) => id === item.id);
    if (index === -1) {
      updateItems.push({
        ...item,
        count: 1
      });
    } else {
      updateItems[index].count++
    }
  }

  return updateItems;
}

function decreaseFromCart({id}, items) {
  let updateItems = items;
  const index = updateItems.findIndex(updateItem => updateItem.id === id);
  if (updateItems[index].count !== 1) {
    updateItems[index].count--;
  }

  return updateItems;
}

function removeFromCart({id}, items) {
  return items.filter(item => item.id !== id);
}

function calculatePrice(items) {
  return items.reduce((sum, {price, count}) => {
    return sum + price * count;
  }, 0)
}

function calculateCount(items) {
  return items.reduce((sum, {count}) => {
    return sum + count;
  }, 0)
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case cartTypes.ADD_PRODUCTS_TO_CART: {
      const updateItems = addToCart(action.payload, state.items);
      return {
        ...state,
        items: updateItems,
        totalPrice: calculatePrice(updateItems),
        totalCount: calculateCount(updateItems),
      }
    }
    case cartTypes.DECREASE_PRODUCTS_FROM_CART: {
      const updateItems = decreaseFromCart(action.payload, state.items);
      return {
        ...state,
        items: updateItems,
        totalPrice: calculatePrice(updateItems),
        totalCount: calculateCount(updateItems),
      }
    }
    case cartTypes.REMOVE_PRODUCTS_FROM_CART: {
      const updateItems = removeFromCart(action.payload, state.items);
      return {
        ...state,
        items: updateItems,
        totalPrice: calculatePrice(updateItems),
        totalCount: calculateCount(updateItems),
      }
    }
    default:
      return state;
  }
}