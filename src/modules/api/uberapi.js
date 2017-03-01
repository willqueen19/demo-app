'use strict'


/*
export function fetchPrice(source, price) {

  start_latitude, start_longitude, end_latitude, end_longitude
  const start_latitude  = source.state.currLat;
  const start_longitude = source.state.currLong;
  const end_latitude    = source.state.destLat;
  const end_longitude   = source.state.

  return {
    type: TYPES.FETCH_PRICE,
    promise: GET(`price?start_latitude=${start_latitude}&start_longitude=${start_longitude}&end_latitude=${end_latitude}&end_longitude=${end_longitude}`), // This is a promise parameter that will be detected by our promiseMiddleware and processed asynchronously
    price
  }
}

*/

export function fetchParams(location) {
  var url = `price?start_latitude=${start_latitude}&start_longitude=${start_longitude}&end_latitude=${end_latitude}&end_longitude=${end_longitude}`;
  return url;
}
