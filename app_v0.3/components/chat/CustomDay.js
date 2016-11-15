import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native'

import { Day } from 'react-native-gifted-chat';

export default class CustomBubble extends Component {
  render () {

    if ( !this.props.isSameDay(this.props.currentMessage, this.props.previousMessage) ) {
      if ( this.props.isSameDay(this.props.currentMessage, {createdAt: new Date(Date.now())}) ) {
        return (
          <View style={{flex:1, alignItems:'center'}}>
            <View style={{flex:1, flexDirection:'row', marginTop:10, marginBottom:7, marginLeft:50, marginRight:50, alignItems:'center'}}>
              <View style={{flex:3, borderTopWidth:2, borderColor:'grey'}}/>
              <Text style={{flex:2, fontSize:16, textAlign:'center', fontWeight:'bold', color:'darkslategrey'}}> Today </Text>
              <View style={{flex:3, borderTopWidth:2, borderColor:'darkslategrey'}}/>
            </View>
            <Text style={{color:'black', marginBottom:15, fontWeight:'bold',fontSize:30}}> Your Story </Text>
          </View>
        )
      }
      return <Day {...this.props} />
    }

    return null
  }
}
