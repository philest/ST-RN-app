import React from 'react'
import BookShelf from '../../bookShelf'
import SikButts from '../../devButtons'
import {
  View
} from 'react-native'

export default BookShelfContainer = () => (
  <View style={{flex:1}}>
    <BookShelf />
    <SikButts style={{position:'absolute'}}/>
  </View>
)
