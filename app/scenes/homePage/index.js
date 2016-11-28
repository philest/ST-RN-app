import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ViewPagerAndroid
} from 'react-native'

import {
  StackNavigation,
  SlidingTabNavigation,
  SlidingTabNavigationItem,
  NavigationActions,
  UIManager
} from '@exponent/ex-navigation'
import { connect } from 'react-redux'
import {ViewPager} from 'rn-viewpager';

import MIcon from 'react-native-vector-icons/MaterialIcons'
import MDIcon from 'react-native-vector-icons/Ionicons'
import FAIcon from 'react-native-vector-icons/FontAwesome'

import { BimodalTitle, BimodalButton} from './navbarComponents'
import Router from 'app/router'
import BookShelf from './BookShelf'
import Messages from './Messages'

const BUTTON_SIZE = 32

const makeButton = (Font, size, name, style={}, onPress=()=>{}) => {
  return <Font name={name} size={size} color='black' style={[{}, style]} />
}


const rightButtons = [
  { button:makeButton(MDIcon, BUTTON_SIZE, 'md-arrow-forward'), goto:1 },
  { button:makeButton(MIcon, BUTTON_SIZE, 'info-outline', ) },
]

const leftButtons = [
  { buttons:null },
  { button:makeButton(FAIcon, BUTTON_SIZE-3, 'book'), goto:0 },
]

class HomePage extends Component {

  static route = {
    navigationBar: {
      renderTitle: ()=> <BimodalTitle titles={['Class Library', 'Ms. Stobierski']} />,
      renderRight: ()=> <BimodalButton position='right' buttons={rightButtons} />,
      renderLeft:  ()=> <BimodalButton position='left' buttons={leftButtons} />,
    },
  }

  constructor (props) {
    super(props)
    this.state = {
      initPage: this.props.homePage.index
    }
  }

  render () {
    const MAGIC_NUMBER = 24
    return (
        <ViewPagerAndroid
          ref={this.props.setPager}
          style={{flex:1, marginBottom:MAGIC_NUMBER}}
          initialPage={this.state.initPage}
          keyboardDismissMode='on-drag'
          onPageSelected={this.props.updateHomePageIndex}>
          <View style={{flex:1}}>
            <BookShelf/>
          </View>
          <View style={{flex:1}}>
            <Messages/>
          </View>
        </ViewPagerAndroid>
    )
  }
}

import { setHomePageIndex, setPagerRef } from './state'

const mapStateToProps = (state) => ({
  homePage: state.scenes.homePage
})

const mapDispatchToProps = (dispatch) => ({
  updateHomePageIndex: (e) => {
    dispatch(setHomePageIndex(e.nativeEvent.position))
  },
  setPager: (pager) => {
    dispatch(setPagerRef(pager))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)
