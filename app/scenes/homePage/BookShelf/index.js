import React, { Component } from 'react'
import BookShelf from 'app/components/bookShelf'
import SikButts from 'app/components/devButtons'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'

@connect()
class BackToMessages extends Component {
  render () {return(
    <TouchableOpacity onPress={()=>this.props.dispatch(NavigationActions.pop('root'))}>
      <Icon name='md-add-circle' size={40}/>
    </TouchableOpacity>
  )}
}

import BookShelfHeader from './BookShelfHeader'


import { NavigationActions, NavigationStyles } from '@exponent/ex-navigation'
export default class BookShelfContainer extends Component {

  static route = {
    styles: {
      ...NavigationStyles.SlideHorizontal,
    },
    navigationBar: {
      title: 'Books',
    },
  }

  render () {
    return (
      <View style={{flex:1}}>
        <BookShelf />
        <SikButts style={{position:'absolute'}}/>
        {/* <BookShelfHeader style={{position:'absolute', top:0, left: 0, right:0}}/> */}
      </View>
    )
  }
}
