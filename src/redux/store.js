import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./root-reducer";
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-saga'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);


export const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga)
