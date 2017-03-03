/* @flow */

import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from 'redux-saga'
import devTools from 'remote-redux-devtools'
import sagas from '../modules/app/sagas'
import rootReducer from '../modules/app/reducer'
import promiseMiddleware from './promise-middleware'

const sagaMiddleware = createSagaMiddleware()

const createStoreWithMiddleware = compose(applyMiddleware(
  sagaMiddleware,
),
devTools())(createStore);

const configureStore = function (initialState: Object = {}): Function {
  let store = createStoreWithMiddleware(rootReducer, initialState);
  sagaMiddleware.run(sagas)

  return store
};

export default configureStore;
