// Types
import {filterTypes} from "./actionTypes";

export function setFilterOrigins(payload) {
  return {
    type: filterTypes.SET_FILTER_ORIGINS,
    payload
  };
}

export function setFilterMinPrice(payload) {
  return {
    type: filterTypes.SET_FILTER_MIN_PRICE,
    payload
  };
}

export function setFilterMaxPrice(payload) {
  return {
    type: filterTypes.SET_FILTER_MAX_PRICE,
    payload
  };
}

export function setFilterPagination(payload) {
  return {
    type: filterTypes.SET_FILTER_PAGINATION,
    payload
  };
}

export function setFilters(payload) {
  return {
    type: filterTypes.SET_FILTERS,
    payload
  };
}
