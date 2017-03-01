import * as types from './actionTypes';
import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';

const initState = {}

function getPriceReducer(state = initState, action) {
    switch (action.type) {
      case types.FETCH_PRICE:
        return {
          ...state,
          currLong: action.currLong,
          currLat:  action.currLat,
          destLong: action.destLong,
          destLat:  action.destLat
        }
      default:
          return state
    }
}

const rootReducer = combineReducers({
    getPriceReducer
})

export default rootReducer
