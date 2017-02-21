/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Alert
} from 'react-native';
import { 
  createStore, 
  combineReducers, 
  applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducer';
import keyMirror from 'keymirror';
import { AsyncStorage } from 'react-native';



export default class uberPrice extends Component {
  constructor(props) {
      super(props);
      this.props.dispatch({type: 'TEST'});
      this.state = {
          currLong: '',
          currLat: '',
          destLong: '',
          destLat: ''
      }
  }
    
  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.title}>
          UBER EVERYWHERE
        </Text>
        <Text style={styles.welcome}>
          See how expensive your ride will be
        </Text>
        <Button style={styles.button}
                title="Log current location"
                color="#841584"
                onPress={onCurrentLocButtonPress}
        />
        <TextInput style={styles.destination}
            placeholder='Longitude'
            //keyboardType={default}
            onChangeText={(destLong) => this.setState({destLong})}
            value={this.state.currLong}
        />
        <TextInput style={styles.destination}
            placeholder='Latitude'
            //keyboardType={default}
            onChangeText={(destLat) => this.setState({destLat})}
            value={this.state.currLat}

        />
        <Button style={styles.button}
                title="Here's how much you're out, mate"
                color="#841584"
                onPress={onFindPriceButtonPress}
        />
      </View>
    );
  }
}

function setCurr (currLong, currLat) {
    return {
        type: 'SET_CURR_LOC',
        currLong,
        currLat
    }
}

function setDest (destLong, destLat) {
    return {
        type: 'SET_DEST_LOC',
        destLong,
        destLat
    }
}

function findPrice(state) {
    console.log('price was logged')
}

const TYPES = keyMirror({
    GET_PRICE: null
})

export function GET(start_latitude, start_longitude, end_latitude, end_longitude, obj) {
    let requestObj = {
        prices: {
            Authorization: Token <sACrAoxNWwC01RNXDUqE4UNvGOwZmNaIGveT4zJY>,
            Accept-Language: en_US,
            Content-Type: application/json
        }
        
        return fetch(${'https://api.uber.com/v1.2/estimates/price?start_latitude='+{start_latitude}+'&start_longitude='+{start_longitude}+'&end_latitude='+{end_latitude}+'&end_longitude='+{end_longitude}}, requestObj);
    }
}

export function getPrice()
    
export default function Price(state = initialState, action) {
  let stateJS = state.toJS(); // turn the Map back to a JS object

  switch (action.type) {
    case `${TYPES.GET_PRICE}_REQUEST`: // perform string concatenation with the variable and the string "_REQUEST"
      return state;
    case `${TYPES.GET_PRICE}_SUCCESS`:
      return 'The distance is '+prices.distance+ ' and the price estimate is '+prices.estimate+'.';
    case `${TYPES.GET_PRICE}_FAILURE`:
      return state;
    default:
      return state;
  }
}

const onFindPriceButtonPress = () => {
    findPrice(this.state)
};

const onCurrentLocButtonPress = () => {
    Alert.alert('Location logged');
    setCurr(5, 5);
    console.log('location logged')
};

const currReducer = function (state = {}, action) {
    switch (action.type) {
        case 'SET_CURR_LOC':
            return {
                ...state,
                currLong: action.currLong,
                currLat: aciton.currLat
            }
        default:
            return state;
    }
}

const destReducer = function (state = {}, action) {
    switch (action.type) {
        case 'SET_DEST_LOC':
            return {
                ...state,
                destLong: action.destLong,
                destLat: aciton.destLat
            }
        default:
            return state;
    }
}

// A simple reducer
const combineCurrAndDestReducer = combineReducers({
    curr: currReducer,
    dest: destReducer
});

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// A simple store
const store = createStoreWithMiddleware(combineCurrAndDestReducer);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',    
    margin: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
  },
  destination: {
      margin: 15,
      textAlign: 'center',
      borderColor: 'gray' 
  },
  button: {
    
  }
});

AppRegistry.registerComponent('uberPrice', () => uberPrice);
