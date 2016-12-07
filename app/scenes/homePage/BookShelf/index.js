import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'

import BookShelf from 'app/components/bookShelf'
// import BookShelfHeader from './BookShelfHeader'

export default class BookShelfContainer extends Component {
  render () {
    return (
      <View style={{flex:1}}>
        <BookShelf />
        {/* <BookShelfHeader style={{position:'absolute', top:0, left: 0, right:0}}/> */}
      </View>
    )
  }
}
