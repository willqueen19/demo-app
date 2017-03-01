'use strict'

//import config  from '../../config';
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

export const fetchPrice = (location) => {
  return {
    type: types.FETCH_PRICE,
    
  }
}
