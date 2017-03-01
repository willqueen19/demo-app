'use strict'

import React from 'react';
import { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';
import {
  Router,
  Scene,
  ActionConst,
  Actions
} from 'react-native-router-flux';
import {
  connect,
  Provider
} from 'react-redux';
import store from './store';
import sampleapp from './components/uber.js';

const RouterWithRedux = connect()(Router)

class RootScene extends Component {
  render() {
    return
  }
}

class Root extends Component {

  render() {
    return (
      <Provider store={ store }>
          <Router>
              {/* Root */}
              <Scene key='root'>
                  <Scene
                    key='sampleapp'
                    component={ sampleapp }
                    type={ ActionConst.REPLACE }
                    initial={ true }
                    />
              </Scene>
          </Router>
      </Provider>
    )
  }
}
