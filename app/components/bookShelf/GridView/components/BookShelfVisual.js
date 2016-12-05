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

const BROWN = '#9c6a3d'
const DARK_BROWN = '#774c29'

const Knob = ({style}) => (<View style={[{ width:STUB_X, height:STUB_Y, marginBottom:STUB_OFFSET,backgroundColor:DARK_BROWN}, style]}/>)

export default class BookShelfVisual extends Component {
  render () {
    const width = this.props.width
    return (
      <View style={[styles.container, {height:SHELF_THICKNESS-STUB_Y+STUB_OFFSET}]}>
        <View style={{flexDirection:'column'}}>
          <View style={[styles.shelfBase, {height:SHELF_THICKNESS/4, backgroundColor: BROWN,}]}/>
          <View style={[styles.shelfBase, {height:SHELF_THICKNESS/2, backgroundColor: DARK_BROWN}]}/>
        </View>
        <Knob style={[styles.knob, {left:20}]}/>
        <Knob style={[styles.knob, {right:20}]}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    left:20,
    bottom:SPACE_BETWEEN_SHELVES - SHELF_THICKNESS/2,
  },
  shelfBase: {
    width:300,
  },
  knob: {
    position:'absolute',
    top:STUB_OFFSET,
  }
})
