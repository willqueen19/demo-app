
import * as APIs from '../api/index'
import API from '../api'
import * as types from './actionTypes';
import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';


function priceReducer(state = 'unknown' , action) {
  if (action.type == types.FETCH_PRICE_SUCCESS) {
    state = action.payload
  }
  return state;

}

const rootReducer = combineReducers({
    //uber_price,
    price: priceReducer
})

export default rootReducer
