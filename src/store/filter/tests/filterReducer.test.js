// Actions
import {setFilterMaxPrice, setFilterMinPrice, setFilterOrigins, setFilterPagination, setFilters} from "../actions";

// Reducer
import filterReducer from "../filterReducer";

describe('filter reducer', () => {
  const initialState = {
    page: 1,
    perPage: 10,
    origins: '',
    minPrice: null,
    maxPrice: null,
    reload: false,
  };

  it('SET_FILTER_ORIGINS', () => {
    const action = setFilterOrigins('origins');
    const newState = filterReducer(initialState, action);
    expect(newState.origins.length).not.toBe(0);
  });

  it('SET_FILTER_MIN_PRICE', () => {
    const action = setFilterMinPrice(1);
    const newState = filterReducer(initialState, action);
    expect(newState.minPrice).not.toBe(null);
  });

  it('SET_FILTER_MAX_PRICE', () => {
    const action = setFilterMaxPrice(1);
    const newState = filterReducer(initialState, action);
    expect(newState.maxPrice).not.toBe(null);
  });

  it('SET_FILTER_PAGINATION', () => {
    const action = setFilterPagination({
      page: 2,
      perPage: 20
    });
    const newState = filterReducer(initialState, action);
    expect(newState.page).not.toBe(1);
    expect(newState.perPage).not.toBe(10);
  });

  it('SET_FILTERS', () => {
    const action = setFilters({
      ...initialState,
      reload: true,
    });
    const newState = filterReducer(initialState, action);
    expect(newState.reload).toBeTruthy();
  });
});