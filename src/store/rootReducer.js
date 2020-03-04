// Core
import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';

// Reducers
import productsReducer from "./products/productsReducer";
import cartReducer from "./cart/cartReducer";
import filterReducer from "./filter/filterReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  filter: filterReducer,
  form: formReducer
});

export default rootReducer;