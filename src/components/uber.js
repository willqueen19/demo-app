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
import {Provider, dispatch} from 'react-redux';
import { AsyncStorage } from 'react-native';
import { AppStyles } from '../styles.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchPriceRequest } from '../modules/app/actions'
//import store from '../store/index.js';

class Uber extends Component {
  constructor(props) {
      super(props);
      this.state = {
          currLong: 'unknown',
          currLat: 'unknown',
          destLong: '-123',
          destLat: '38',
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
                   placeholder='Destination Longitude'
                   onChangeText={(destLong) => this.setState({destLong})}
                   value={this.state.destLong}
        />
        <TextInput style={styles.destination}
                   placeholder='Destination Latitude'
                   onChangeText={(destLat) => this.setState({destLat})}
                   value={this.state.destLat}
        />
        <Button style={styles.button}
                title="Here's how much you're out"
                color="#841584"
                onPress={() => {
                  this.props.dispatch(fetchPriceRequest(this.state))
                  console.log('dispatching')
                }}
        />
        <Text>
            <Text style={styles.destination}> It will cost: </Text>
            {this.props.receivedPrice}
        </Text>
      </View>
    );
  }
}



function mapStateToProps(state) {
  return {
    receivedPrice: state.price
  }
}

export default connect(mapStateToProps)(Uber);


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
