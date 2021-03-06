import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'

import { hideBackBarAndUnselectBubble } from 'app/composedActions'


const toString = (item) => {
  if (item) return item.toString();
  return  null
}

const BUBBLE_DIAMETER = 47

export class QuestionBubble extends Component {

  constructor (props) {
    super(props)
    this.isMe = this.isMe.bind(this)
    this.onPress= this.onPress.bind(this)
  }

  isMe(selectedBubble) {
    return (selectedBubble===this)
  }

  onPress (func) {
    if (this.isMe(this.props.selectedBubble)) {
      this.props.dispatch(hideBackBarAndUnselectBubble())
      return
    }

    this.props.dispatch(func(this.props.text, this))
  }

  render () {
    const glowbump        = 15
    const bubbleWidth     = this.props.width || BUBBLE_DIAMETER
    const bubbleHeight    = this.props.height || BUBBLE_DIAMETER
    const bubbleRadius    = bubbleHeight/2                    // TODO add vert/horiz radius when needed
    const containerWidth  = bubbleWidth + glowbump
    const containerHeight = bubbleHeight + glowbump
    const containerRadius = containerHeight/2

    glowAlpha = (this.isMe(this.props.selectedBubble)) ? `rgba(255,255,255,0.5)` : `rgba(255,255,255,0)`
    return (
      <TouchableWithoutFeedback style={{width:containerWidth, height:containerHeight}} onPress={()=>this.onPress(this.props.onPress)}>
        <View style={[styles.glow, {backgroundColor: glowAlpha, borderRadius:containerRadius, width:containerWidth, height:containerHeight,}]}>
        <View style={[styles.shadow, {borderRadius:bubbleRadius, width:bubbleWidth, height:bubbleHeight}]} />
          <View style={[styles.bubble, {borderRadius:bubbleRadius, width:bubbleWidth, height:bubbleHeight, transform:[{rotateZ:this.props.ang||'20deg'}]}]}>
            <Text style={[styles.bubbleText, {fontSize:bubbleWidth-15}]}>?</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

mapStateToProps = (state) => ({
  selectedBubble : state.components.stBubbles.selectedBubble
})

export default connect(mapStateToProps)(QuestionBubble)

const styles = StyleSheet.create({
  container: {

  },
  glow: {
    justifyContent:'center'
  },
  shadow:{
    position:'absolute',
    left:6,
    bottom:4,
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  bubble: {
    backgroundColor: '#ed7a44',
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bubbleText: {
    color:'white',
    fontFamily:'KGCorneroftheSky'
  }
})
