'use strict'

// bring in these functions from redux to create our app 
import { createStore, applyMiddleware } from 'redux';
// use our thunk to handle async requests
import thunkMiddleware from 'redux-thunk';
// bring in the promise middleware we built previously
import promiseMiddleware from '../middlewares/promise';

// bring in our root reducer
import rootReducer from '../reducers';

// include all the middleware
let middlewares = [
  thunkMiddleware,
  promiseMiddleware // put the promise into the array
];

// Add our middlewares in
let createStoreWithMiddleware = applyMiddleware(
  ...middlewares // put in the middleware
)(createStore);

// create the store with middlewares
function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}

export default configureStore();