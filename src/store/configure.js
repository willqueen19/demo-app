/* @flow */

import { createStore, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"
//import createLogger from "redux-logger"
import createSagaMiddleware from 'redux-saga'
import devTools from 'remote-redux-devtools'

import sagas from '../modules/app/sagas'
import rootReducer from '../modules/app/reducer'
import promiseMiddleware from './promise-middleware'
//import realmMiddleware from "./realm-middleware"

const sagaMiddleware = createSagaMiddleware()
//const loggerMiddleware = createLogger()

const createStoreWithMiddleware = compose(applyMiddleware(
  thunkMiddleware,
//  loggerMiddleware,
  sagaMiddleware,
  //realmMiddleware,
  promiseMiddleware
),
devTools())(createStore);

const configureStore = function (initialState: Object = {}): Function {
  let store = createStoreWithMiddleware(rootReducer, initialState);
  sagaMiddleware.run(sagas)
  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store
};

export default configureStore;
