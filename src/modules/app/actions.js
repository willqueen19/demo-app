'use strict'

//import config  from '../../config';
import GET from '../api/uberapi'
import * as types from './actionTypes'

export function fetchPrice(location) {
  return {
    type: types.FETCH_PRICE,
    promise: GET(location)
  }
}

export function fetchPriceRequest(location) {
  return {
    type: types.FETCH_PRICE_REQUEST,
    payload: location
  }
}

export function returnPrice(price) {
  return {
    type: types.FETCH_PRICE_SUCCESS,
    payload: price
  }
}
