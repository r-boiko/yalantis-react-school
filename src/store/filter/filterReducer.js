// Types
import {filterTypes} from "./actionTypes";

export const initialState = {
  page: 1,
  perPage: 10,
  origins: '',
  minPrice: null,
  maxPrice: null,
  reload: false,
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case filterTypes.SET_FILTER_ORIGINS: {
      return {
        ...state,
        origins: action.payload.toString(),
      }
    }
    case filterTypes.SET_FILTER_MIN_PRICE: {
      return {
        ...state,
        minPrice: action.payload
      }
    }
    case filterTypes.SET_FILTER_MAX_PRICE: {
      return {
        ...state,
        maxPrice: action.payload
      }
    }
    case filterTypes.SET_FILTER_PAGINATION: {
      return {
        ...state,
        page: action.payload.page,
        perPage: action.payload.perPage,
      }
    }
    case filterTypes.SET_FILTERS: {
      return {
        ...state,
        ...action.payload,
      }
    }
    default:
      return state;
  }
}