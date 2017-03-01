'use strict'

import React from 'react';
import { Component, AppState } from 'react';
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
import { actions as appActions } from './modules/app'
import { actionTypes as types } from './modules/app'
import store from './store';
import Uber from './components/uber.js';

const RouterWithRedux = connect()(Router)

class RootScene extends Component {

  pop = () => {
    this.props.dispatch(appActions.pushScene('pop'))
  }

  popTo = (scene) => {
    this.props.dispatch(appActions.pushScene('popTo' ,scene))
  }

  render() {
    return (
      <RouterWithRedux>
        <Scene key='uber' component={Uber} title='Uber Price Finder'/>
      </RouterWithRedux>
    )
  }
}

RootScene = connect()(RootScene)

class Root extends Component {
  /*
  componentWillMount() {
    store.dispatch(appActions.appInit(store.dispatch, this.props))
    this._appStateListener = AppState.addListener('appStateDidChange', (appState) => {
      store.dispatch(appActions.appStateChanged(appState))
    })
  }
  */
  render() {
    return (
      <Provider store={ store }>
          <RootScene />
      </Provider>
    )
  }
}

export default Root;
