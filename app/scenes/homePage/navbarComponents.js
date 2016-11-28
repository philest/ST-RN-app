import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ViewPagerAndroid
} from 'react-native';
import STText from 'app/components/STText'
import { connect } from 'react-redux'

const QuestionMark =  <View><STText>?</STText></View>

class BimodalButton_ extends Component {
  static defaultProps = {
    buttons: [QuestionMark, QuestionMark]
  }
  _renderButton (mode) {
    const padding = 20
    const position = this.props.position
    const page = this.props.buttons[mode].goto
    const button = this.props.buttons[mode].button
    const onPress = (Number.isInteger(page) ? () => {this.props.setPage(page); this.props.pager.setPage(page)} : this.props.buttons[mode].onPress)

    return <TouchableOpacity style={{flex:1, paddingLeft: position=='left'?padding:0, paddingRight:position=='right'?padding:0}} onPress={ onPress } >
      <View style={{alignItems:'center', flex:1, justifyContent:'center'}}>
        { button }
      </View>
    </TouchableOpacity>
  }
  render () { return this._renderButton(this.props.mode) }
}

class BimodalTitle_ extends Component {
  static defaultProps = {
    titles: ['0','1']
  }
  _renderTitle(mode) {
    return <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <STText style={{fontSize:25}}> {this.props.titles[mode]} </STText>
    </View>
  }
  render () { return this._renderTitle(this.props.mode) }
}



// connect these babies up!
import { setHomePageIndex } from './state'

const mapStateToProps = (state) => ({
  mode: state.scenes.homePage.index,
  pager: state.scenes.homePage.pagerRef
})

const mapDispatchToProps = (dispatch) => ({
  setPage: (page) => {
    dispatch(setHomePageIndex(page))
  },
})

export const BimodalButton = connect(mapStateToProps, mapDispatchToProps)(BimodalButton_)
export const BimodalTitle = connect(mapStateToProps)(BimodalTitle_)
