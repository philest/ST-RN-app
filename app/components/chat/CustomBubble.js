import React, { Component } from 'react'
import {
  Linking,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Image
} from 'react-native'

import { Bubble, Time } from 'react-native-gifted-chat';

export default class CustomBubble extends Component {
  render() {

    // styling for when messsage is a new story
    const currentColor = (newStory) => {
      if (!newStory) {
        return '#f0f0f0'
      }
      return '#FFFFFF'
    }

    return (
      <Bubble
        {...this.props}
        wrapperStyle={{
          left: {
            backgroundColor: currentColor(this.props.currentMessage.newStory),
          }
        }}
        // don't render time if the message is a new story
        renderTime={(timeProps)=>!this.props.currentMessage.newStory ? <Time {...timeProps}/> : false}
      />
    )

    return null
  }
}
