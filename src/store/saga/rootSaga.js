// Core
import {takeEvery, select, put, call} from 'redux-saga/effects';

// Types
import {types} from "./types";

// Api
import {fetchProducts, fetchProductsOrigins} from "../../api/api";

// Actions
import {setProducts, setProductsOrigins} from "../products/actions";
import {setFilters} from "../filter/actions";

// Selectors
import {getFilter} from "../selectors";

function* workerGetDataFromLocalStorage() {
  const dataFromLocalStorage = yield JSON.parse(localStorage.getItem('dataFromLocalStorage'));
  yield put(setFilters({
    ...dataFromLocalStorage,
    reload: true,
  }));
}

function* workerGetProductsAsync() {
  const filter = yield select(getFilter);
  yield yield put(setProducts({pending: true, items: []}));
  const response = yield call(fetchProducts, filter);
  yield put(setProducts({
    ...response,
    pending: false
  }))
}

function* workerGetProductsOriginsAsync() {
  yield yield put(setProductsOrigins({pending: true, items: []}));
  const response = yield call(fetchProductsOrigins);
  yield put(setProductsOrigins({
    ...response,
    pending: false
  }))
}

function* rootSaga() {
  yield takeEvery(types.GET_DATA_FROM_LOCAL_STORAGE, workerGetDataFromLocalStorage);
  yield takeEvery(types.GET_PRODUCTS_ASYNC, workerGetProductsAsync);
  yield takeEvery(types.GET_PRODUCTS_ORIGINS_ASYNC, workerGetProductsOriginsAsync);
}

export default rootSaga;