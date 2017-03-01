'use strict'

//import config  from '../../config';
import GET from '../api/uberapi'
import * as types from './actionTypes'

/*
 * Activate fetch action
 */

/*
export function GET(endpoint, obj) {
    let requestObj = {
        header: {
            Authorization: 'Token sACrAoxNWwC01RNXDUqE4UNvGOwZmNaIGveT4zJY',
            'Accept-Language': 'en_US',
            'Content-Type': 'application/json'
        }
    }

    return fetch(`https://api.uber.com/v1.2/estimates/${endpoint}, requestObj);
}
*/

export function appInit(dispatch, config) {
  return {
    type: types.APP_INIT,
    dispatch,
    config
  }
}

export function fetchPrice(location) {
  return {
    type: types.FETCH_PRICE,
    promise: GET(location)
  }
}
