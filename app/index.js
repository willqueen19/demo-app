'use strict'

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

import {
  Router,
  Scene,
  ActionConst
} from 'react-native-router-flux';

import ReactDOM from 'react-dom';

import {
  Provider
} from 'react-redux';

import store from './store';
//import styles from './styles';

/*
 * Import top level containers
 */

import sampleapp from './components/uber.js';

export default function native() {
  const app = () => {
    return (
      <Provider store={ store }>
        <Router>

          {/* Root */}
          <Scene key='root'>

            <Scene
              key='news'
              component={ sampleapp }
              type={ ActionConst.REPLACE }
              initial={ true }
              />

          </Scene>

        </Router>
      </Provider>
    )
  }

  AppRegistry.registerComponent('native', () => app);
}
