'use strict'

import {
  StyleSheet, // StyleSheet helps us create CSS-like styling with JS
  Platform // Platform allows us to identify whether the device is iOS or Android
} from 'react-native';

import config from '../config'; // source in our configuration files

// Create app-wide styling
const AppStyles = StyleSheet.create({

  navbar: { // create the styles for our navbar.
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderBottomWidth: 0,
  },

  logo: { // create the styles for our logo
    maxWidth: config.windowWidthHalf,
    resizeMode: 'contain',
    alignSelf: 'center',
    ...Platform.select({ // use our Platform configuration to add styles
      ios: { // styling for iOS
        maxHeight: 55,
        marginTop: 20
      },
      android: { // styling for Android
        maxHeight: 50,
        marginTop: 10
      }
    })
  },

});

// export the file for usage
export default AppStyles;