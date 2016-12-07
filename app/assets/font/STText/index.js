import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'


export default class STText extends Component {
  render () {
    return (<Text style={[styles.baseText, this.props.style]}> {this.props.children} </Text>)
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Karla-Bold',
  },
});
