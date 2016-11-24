import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Keyboard,
  UIManager,
  LayoutAnimation,
  Dimensions
} from 'react-native';


UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)


import STChat from 'app/components/chat/chat'

import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'

import { NavigationActions, NavigationStyles } from '@exponent/ex-navigation'

import Router from 'app/router'

@connect()
class LibraryButton extends Component {
  render () {return(
    <View style={[styles.center, {}]}>
      <TouchableOpacity onPress={()=>{
        Keyboard.dismiss()
        this.props.dispatch(NavigationActions.push('root', Router.getRoute('read')))
      }}>
        <Icon style={{paddingLeft:20}} name='md-apps' size={40}/>
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
        <Icon style={{alignSelf:'center', paddingRight:20}} name='md-information-circle' size={40}/>
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

const button = (text) => (
  <TouchableOpacity>
    <View><Text style={{fontSize:35}}> {text} </Text></View>
  </TouchableOpacity>
)


export default class MessagesContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Chat Screen Title',
      renderRight: () => button('right'),
      renderLeft: () => button('left')

    }
  }


  render() {
    return (
      <STChat />
    )
  }
}
