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


const onCurrentLocButtonPress = () => {
    Alert.alert('Location logged');
};

export default class sampleapp extends Component {
  constructor(props) {
      super(props);
      this.state = {
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
        <Button title="Log current location"
                color="#841584"
                onPress={onCurrentLocButtonPress}
        />
        <TextInput style={styles.destination}
            editable={true}
            placeholder='Destination - Longitude'
            onChangeText={(destLong) => this.setState({destLong})}  
        />
        <TextInput style={styles.destination}
            editable={true}
            placeholder='Destination - Latitude'
            onChangeText={(destLat) => this.setState({destLat})}

        />
        <Button title="Here's how much you're out, mate"
                color="#841584"
                //onPress=""
        />
      </View>
    );
  }
}

function setCurrentLoc (info1, info2) {
    return {
        type: 'TAKE_CURRENT_LOC',
        currLong: currLong,
        currLat: currLat
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
      textAlign: 'center'
      
  }
});

AppRegistry.registerComponent('uber', () => uber);