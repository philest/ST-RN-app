import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ViewPagerAndroid
} from 'react-native';

import { connect } from 'react-redux'

const QuestionMark =  <View><Text>?</Text></View>

class BimodalButton_ extends Component {

  static defaultProps = {
    buttons: [QuestionMark, QuestionMark]
  }

  _renderButton (mode) {
    const page = this.props.buttons[mode].goto
    const button = this.props.buttons[mode].button
    const onPress = (Number.isInteger(page) ? () => {this.props.setPage(page); this.props.pager.setPage(page)} : this.props.buttons[mode].onPress)
    return <TouchableOpacity style={{flex:1}} onPress={ onPress } >
      <View style={{alignItems:'center', flex:1, justifyContent:'center'}}>
        { button }
      </View>
    </TouchableOpacity>

  }

  render () {
    return (
      this._renderButton(this.props.mode)
    )
  }
}

// TODO: someday animate these guys :(
class BimodalTitle_ extends Component {
  static defaultProps = {
    titles: ['1','0']
  }

  _renderTitle(mode) {
    return <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text style={{fontSize:25}}> {this.props.titles[mode]} </Text>
    </View>
  }

  render () {
    return (
      this._renderTitle(this.props.mode)
    )
  }
}


const mapStateToProps = (state) => ({
  mode: state.scenes.homePage.index,
  pager: state.scenes.homePage.pagerRef
})

import { setHomePageIndex } from './state'

const mapDispatchToProps = (dispatch) => ({
  setPage: (page) => {
    dispatch(setHomePageIndex(page))
  },
})

export const BimodalButton = connect(mapStateToProps, mapDispatchToProps)(BimodalButton_)
export const BimodalTitle = connect(mapStateToProps)(BimodalTitle_)
