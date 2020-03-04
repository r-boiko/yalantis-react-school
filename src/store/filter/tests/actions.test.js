// Types
import {filterTypes} from '../actionTypes';

// Actions
import {setFilterMaxPrice, setFilterMinPrice, setFilterOrigins, setFilterPagination, setFilters} from "../actions";

describe('filter actions', () => {
  it('setFilterOrigins', () => {
    expect(setFilterOrigins('')).toEqual({
      type: filterTypes.SET_FILTER_ORIGINS,
      payload: ''
    });
  });

  it('setFilterMinPrice', () => {
    expect(setFilterMinPrice(1)).toEqual({
      type: filterTypes.SET_FILTER_MIN_PRICE,
      payload: 1
    });
  });

  it('setFilterMaxPrice', () => {
    expect(setFilterMaxPrice(1)).toEqual({
      type: filterTypes.SET_FILTER_MAX_PRICE,
      payload: 1
    });
  });

  it('setFilterPagination', () => {
    expect(setFilterPagination({})).toEqual({
      type: filterTypes.SET_FILTER_PAGINATION,
      payload: {}
    });
  });

  it('setFilters', () => {
    expect(setFilters({})).toEqual({
      type: filterTypes.SET_FILTERS,
      payload: {}
    });
  });
});