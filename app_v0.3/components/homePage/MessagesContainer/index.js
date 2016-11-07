import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'

import { NavigationActions, NavigationStyles } from '@exponent/ex-navigation'

import Router from '../../../router'

@connect()
class LibraryButton extends Component {
  render () {return(
    <View style={[styles.center, {}]}>
      <TouchableOpacity onPress={()=>this.props.dispatch(NavigationActions.push('root', Router.getRoute('read')))}>
        <Icon style={{paddingRight:20}} name='md-apps' size={40}/>
      </TouchableOpacity>
    </View>
  )}
}

@connect()
class InfoButton extends Component {
  render () {return(
    <View style={[styles.center, {}]}>
      <TouchableOpacity
        // onPress={()=>this.props.dispatch(NavigationActions.push('root', Router.getRoute('read')))}
        >
        <Icon style={{alignSelf:'center', paddingLeft:20}} name='md-information-circle' size={40}/>
      </TouchableOpacity>
    </View>
  )}
}

const styles = StyleSheet.create({
  center : {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  }
})

@connect()
class TitleText extends Component {
  render () {return(
    <View style={[styles.center, {}]}>
      <Text style={{fontSize:22}}> StoryTime</Text>
    </View>

  )}
}

export default class MessagesContainer extends Component {

  static route = {
    styles: {

    },
    navigationBar: {
      renderTitle: ()=> <TitleText />,
      renderLeft: ()=> <InfoButton />,
      renderRight: ()=> <LibraryButton />
    },
  }


  render () {
    return (
      <View style={{flex:1}}>
        <Text>Messages!!!!!</Text>
      </View>
    )
  }
}
