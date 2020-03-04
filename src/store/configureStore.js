// Core
import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore, compose} from "redux";

// Reducer
import rootReducer from "./rootReducer";

// Saga
import rootSaga from "./saga/rootSaga";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
      rootReducer,
      compose(
          applyMiddleware(sagaMiddleware),
          window.__REDUX_DEVTOOLS_EXTENSION__
              ? window.__REDUX_DEVTOOLS_EXTENSION__()
              : f => f
      )
  );
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;