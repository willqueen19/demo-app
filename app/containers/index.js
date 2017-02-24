'use strict'

import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native' // Text and View are native components built into react native. We can use them to build our user interface
import sampleapp from '../components/uber.js'
import { connect } from 'react-redux';
import store from '../store/index.js';
import axios from 'axios';

const PriceContainer = createClass({
  componentDidMount: function() {
    axios.get('../components/')
  }
  )
})

/*
class News extends Component {
  render() {
    return (
      <View></View>
    )
  }
}

export default News;
*/
