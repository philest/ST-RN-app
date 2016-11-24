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

import STChat from 'app/components/chat/chat'
import Router from 'app/router'

export default class MessagesContainer extends Component {
  render () { return  <STChat/> }
}
