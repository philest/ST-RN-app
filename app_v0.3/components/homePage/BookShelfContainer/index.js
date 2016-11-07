import React, { Component } from 'react'
import BookShelf from '../../bookShelf'
import SikButts from '../../devButtons'
import {
  View,
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



import { NavigationActions, NavigationStyles } from '@exponent/ex-navigation'
export default class BookShelfContainer extends Component {

  static route = {
    styles: {
      ...NavigationStyles.SlideHorizontal,
    },
    navigationBar: {
      title: 'Books',
      // renderRight: () => <BackToMessages />
    },
  }


  render () {
    return (
      <View style={{flex:1}}>
        <BookShelf />
        <SikButts style={{position:'absolute'}}/>
      </View>
    )
  }
}
