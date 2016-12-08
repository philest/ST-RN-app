import React, { Component } from 'react'
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native'
import { connect } from 'react-redux'

import QuestionBubble from 'app/components/st-bubbles'

const getScaledDims = (imgDims, containerDims) => {
    const scaleX = containerDims.x/imgDims.x
    const hX = imgDims.y*scaleX


    if (hX > containerDims.y) { return {
        scaledWidth: imgDims.x*containerDims.y/imgDims.y,
        scaledHeight: containerDims.y
      }
    }
    return {
      scaledWidth: containerDims.x,
      scaledHeight: hX
    }
}

export default class CanvasBubble extends Component {

  render () {

    const {scaledWidth, scaledHeight} = getScaledDims(this.props.imgDims, this.props.containerDims)

    const xPos = scaledWidth  * this.props.xPos
    const yPos = scaledHeight * this.props.yPos


    if (scaledWidth && scaledHeight) {
      return <View style={[styles.canvasBubble, {top:yPos, left:xPos}]}>
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
