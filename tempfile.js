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
import { AsyncStorage } from 'react-native';



export default class sampleapp extends Component {
  constructor(props) {
      super(props);
      this.state = {
          currLong: 'unknown',
          currLat: 'unknown',
          destLong: '',
          destLat: ''
      }
  }
    
  componentDidMount() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
            var initialLong = position.coords.longitude;
            var initialLat  = position.coords.latitude;
            console.log(position);
            this.setState({
                currLong: initialLong,
                currLat: initialLat
            })
        }
          
      )
  }
    
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
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
        <Text>
            <Text style={styles.welcome}> Current Longitude: </Text>
            {this.state.currLong}
        </Text>
        <Text>
            <Text style={styles.welcome}> Current Latitude: </Text>
            {this.state.currLat}
        </Text>
        <TextInput style={styles.destination}
            placeholder='Longitude'
            onChangeText={(destLong) => this.setState({destLong})}
            value={this.state.destLong}
        />
        <TextInput style={styles.destination}
            placeholder='Latitude'
            onChangeText={(destLat) => this.setState({destLat})}
            value={this.state.destLat}

        />
        <Button style={styles.button}
                title="Here's how much you're out"
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
    return function (dispatch) {
        return 
    }
}


export function GET(start_latitude, start_longitude, end_latitude, end_longitude, obj) {
    let requestObj = {
        header: {
            Authorization: 'Token sACrAoxNWwC01RNXDUqE4UNvGOwZmNaIGveT4zJY',
            'Accept-Language': 'en_US',
            'Content-Type': 'application/json'
        }
    }
        
        return fetch(`https://api.uber.com/v1.2/estimates/price?start_latitude=${start_latitude}&start_longitude=${start_longitude}&end_latitude=${end_latitude}&end_longitude=${end_longitude}`, requestObj);
}
    
    

//export function getPrice()
    
/*
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

*/

const onFindPriceButtonPress = () => {
    findPrice(this.state)
};

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
      height: 20,
      textAlign: 'center',
      borderColor: 'gray' 
  },
  button: {
    
  }
});

AppRegistry.registerComponent('sampleapp', () => sampleapp);
