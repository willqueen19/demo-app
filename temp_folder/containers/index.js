'use strict'

import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native' // Text and View are native components built into react native. We can use them to build our user interface
import sampleapp from '../components/uber.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import store from '../store/index.js';
import axios from 'axios';

function mapStateToProps(state) {
  const { Locs } = state
  return {
    Locs
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch)
}

class Uber extends Component {
  render() {
    return {
      <sampleapp />
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Uber);
