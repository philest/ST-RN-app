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

export const SHELF_THICKNESS=15
const STUB_Y= 10
const STUB_X= 15
const STUB_OFFSET = 10

const BROWN = '#9c6a3d'
const DARK_BROWN = '#774c29'

const Knob = ({style}) => (<View style={[{ width:STUB_X, height:STUB_Y, marginBottom:STUB_OFFSET,backgroundColor:'pink'}, style]}/>)

export default class BookShelfVisual extends Component {
  render () {
    const width = this.props.width
    return (
      <View style={styles.container}>
          <View style={styles.horizontalWrap}>
            <View style={styles.shelfBaseTop}/>
            <View style={styles.shelfBaseBottom}/>
          </View>
          <Knob style={[styles.knob, {left:50}]}/>
          <Knob style={[styles.knob, {right:50}]}/>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height:SHELF_THICKNESS,
    flexDirection:'row',
    // backgroundColor:'green',
    paddingLeft:20,
    paddingRight:20
  },
  horizontalWrap: {
    flex:1,
    flexDirection:'column',
    height:SHELF_THICKNESS*3/4,
  },
  shelfBaseTop: {
    height:SHELF_THICKNESS/4,
    backgroundColor: BROWN,
  },
  shelfBaseBottom: {
    height:SHELF_THICKNESS*2/5,
    backgroundColor: DARK_BROWN
  },
  knob: {
    position:'absolute',
    top:STUB_OFFSET,
    backgroundColor: DARK_BROWN,
    height:7
  }
})
