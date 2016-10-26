'use strict';

import React,{ Component } from 'react'
import { AppRegistry, View } from 'react-native'

import { Provider } from 'react-redux'

import Src from './app_v0.3'



class App extends Component {
  render () {
    return <Src />
  }
}
AppRegistry.registerComponent('StoryTime', () => App)
