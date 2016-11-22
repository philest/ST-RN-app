import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Display
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

export const BOOKSHELF_HEADER_CONTAINER_HEIGHT = 80
export const GRADIENT_HEIGHT = 10

// TODO: some sort of pan-respond thing instead of gradient
export default class BookShelfPageHeader extends Component {
  render () {

    return (
      <View style={[{ }, this.props.style]}>
        <View style={{flex:1, backgroundColor:'transparent',  height:BOOKSHELF_HEADER_CONTAINER_HEIGHT+GRADIENT_HEIGHT}} >
          <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{ backgroundColor:'transparent', fontSize:30, fontWeight:'bold', color:'black'}}>
            Your Books
            </Text>
            <Text style={{ fontSize:15 }}>
              from Ms. Stobierski
            </Text>
          </View>
          <LinearGradient
            colors={['white', 'rgba(1,1,1,0)']}
            style={{height:GRADIENT_HEIGHT}}>
          </LinearGradient>
        </View>
      </View>
    )
  }
}
