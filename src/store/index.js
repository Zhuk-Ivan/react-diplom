import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./rootReducer";
import { startSagas } from "./startSagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = compose;
export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

startSagas(sagaMiddleware);
