import TYPES from '../types';
import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';

const initState = {}

function getPriceReducer(state = initState, action) {
    switch (action.type) {
      case TYPES.FETCH_PRICE:
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

const rootReducers = combineReducers({
    getPriceReducer,
})

export default rootReducers;
