'use strict';

import React, { Component } from 'react'
import { AppRegistry, } from 'react-native'

import Src from './app_v0.3'

class App extends Component {
  render () {
    return <Src />
  }
}

AppRegistry.registerComponent('StoryTime', () => App)
