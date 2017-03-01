import combineReducers from 'redux'
import RNFS from 'react-native-fs'

class Location {
  get profileSource() {
    return {
      uri: RNFS.DocumentDirectoryPath+this.profilePath
    }
  }
}

Location.schema = {
  name: 'Location',
  primaryKey: 'recordID',
  proporties: {
    currLong: 'string',
    currLat:  'string',
    destLong: 'string',
    destLat:  'string'
  }
}

export default Location

const FETCH_PRICE = 'FETCH_PRICE'
const fetchPrice = (location) => {
  return {
    type: 'FETCH_PRICE',
    payload: location
  }
}
