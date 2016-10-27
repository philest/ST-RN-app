import React from 'react';
import BookShelf from '../../bookShelf'
import SikButts from '../../devButtons'
import { connect } from 'react-redux'

export default BookShelfContainer = ({}) => (
  <View style={{flex:1}}>
    <BookShelf />
    <SikButts style={{position:'absolute'}}/>
  </View>
)
