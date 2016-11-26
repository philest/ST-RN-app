import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Keyboard,
  UIManager,
  LayoutAnimation,
  Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'

import STChat from './chat'

export default class MessagesContainer extends Component {
  render () { return  <STChat/> }
}
