import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Display
} from 'react-native'

import { SPACE_BETWEEN_SHELVES } from './GridItem'

const SHELF_THICKNESS=15
const STUB_Y= 10
const STUB_X= 15
const STUB_OFFSET = 10

const BROWN = '#80461B'
const DARK_BROWN = '#6B4423'

const Knob = ({style}) => (<View style={[{ width:STUB_X, height:STUB_Y, marginBottom:STUB_OFFSET,backgroundColor:DARK_BROWN}, style]}/>)

export default class BookShelfVisual extends Component {
  render () {
    const width = this.props.width
    return (
      <View style={[styles.container, {height:SHELF_THICKNESS-STUB_Y+STUB_OFFSET}]}>
        <View style={{flexDirection:'column'}}>
          <View style={[styles.shelfBase1, {flex:1, height:SHELF_THICKNESS/4}]}/>
          <View style={[styles.shelfBase2, {flex:1, height:SHELF_THICKNESS/2}]}/>
        </View>
        <Knob style={{position:'absolute', top:STUB_OFFSET, left:20}}/>
        <Knob style={{position:'absolute', top:STUB_OFFSET, right:20}}/>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    position:'absolute',
    left:20,
    bottom:SPACE_BETWEEN_SHELVES - SHELF_THICKNESS/2,
  },
  shelfBase1: {
    backgroundColor: BROWN,
    width:300,
    height:20,
  },
  shelfBase2: {
    backgroundColor: DARK_BROWN,
    width:300,
    height:20,
  }
})
