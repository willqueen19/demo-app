'use strict'

import {
  StyleSheet, // StyleSheet helps us create CSS-like styling with JS
  Platform // Platform allows us to identify whether the device is iOS or Android
} from 'react-native';

import config from '../config'; // source in our configuration files

// Create app-wide styling

const AppStyles = StyleSheet.create({
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

// export the file for usage
export default AppStyles;