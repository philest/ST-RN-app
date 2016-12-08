import React, { Component } from 'react'
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native'
import { connect } from 'react-redux'

import QuestionBubble from 'app/components/st-bubbles'


export default class CanvasBubble extends Component {

  render () {
    const imgHeight = this.props.imgHeight
    const imgWidth  = this.props.imgWidth
    const xpos = imgWidth * this.props.x
    const ypos = imgHeight * this.props.y


    if (imgHeight && imgWidth) {
      return <View style={[styles.canvasBubble, {top:ypos, left:xpos}]}>
      <QuestionBubble
        {...this.props}
        width={this.props.bubbleWidth}
        height={this.props.bubbleHeight}
        onPress={this.props.onPress}
        text={this.props.text}
      />
      </View>
    }
    return null
  }
}

const styles = StyleSheet.create({
  canvasBubble: {
    position: 'absolute',
  }
})
