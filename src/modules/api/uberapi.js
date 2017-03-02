'use strict'

const server_token = 'sACrAoxNWwC01RNXDUqE4UNvGOwZmNaIGveT4zJY'

//source refers to the source information, AKA the location
export function GET(location) {

  const start_latitude  = location.currLat;
  const start_longitude = location.currLong;
  const end_latitude    = location.destLat;
  const end_longitude   = location.destLong;
  const endpoint        = `price?start_latitude=${start_latitude}&start_longitude=${start_longitude}&end_latitude=${end_latitude}&end_longitude=${end_longitude}`;

  let requestObj = {
      headers: {
          'Authorization': `Token ${server_token}`,
          'Accept-Language': 'en_US',
          'Content-Type': 'application/json'
      }
  }

  //Fetch calls must always be formatted with the URL first, then the request object
  return fetch(`https://api.uber.com/v1.2/estimates/${endpoint}`, requestObj);
}
