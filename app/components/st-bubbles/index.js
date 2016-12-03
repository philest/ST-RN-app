import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'

import { setSelectedBubble } from './state'

export class QuestionBubble extends Component {

  constructor (props) {
    super(props)
    this._onPress = this._onPress.bind(this)
    this.isMe = this.isMe.bind(this)
  }

  _onPress () {
    this.props.dispatch(setSelectedBubble(this))
  }

  isMe(selectedBubble) {
    if (selectedBubble===this) {
      return `rgba(100,0,120,0.3)`
    }
    return `rgba(100,0,120,0)`
  }

  render () {
    const glowbump        = 15
    const bubbleWidth     = this.props.width || 70
    const bubbleHeight    = this.props.height || 70
    const bubbleRadius    = bubbleHeight/2                    // TODO add vert/horiz radius when needed
    const containerWidth  = bubbleWidth + glowbump
    const containerHeight = bubbleHeight + glowbump
    const containerRadius = containerHeight/2

    glowAlpha = this.isMe(this.props.selectedBubble)
    return (
      <TouchableWithoutFeedback style={{width:containerWidth, height:containerHeight}} onPress={this._onPress}>
        <View style={[styles.glow, {backgroundColor: glowAlpha, borderRadius:containerRadius, width:containerWidth, height:containerHeight,}]}>
          <View style={[styles.bubble, {borderRadius:bubbleRadius, width:bubbleWidth, height:bubbleHeight}]}>
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
  bubble: {
    backgroundColor: '#FF9914',
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bubbleText: {
    color:'white',
    fontFamily:'KGCorneroftheSky'
  }
})
