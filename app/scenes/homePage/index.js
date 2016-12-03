import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ViewPagerAndroid,
  Text,
  Image
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

import {QuestionBubble} from 'app/components/st-bubbles'


const BUTTON_SIZE = 32

const makeButton = (Font, size, name, style={}, onPress=()=>{}) => {
  return <Font name={name} size={size} color='black' style={[{}, style]} />
}


const rightButtons = [
  { button:makeButton(MDIcon, BUTTON_SIZE, 'md-arrow-forward'), goto:1 },
  { button:makeButton(MIcon, BUTTON_SIZE, 'info-outline', ) },
]

const leftButtons = [
  { button:null },
  { button:<View><Text style={{paddingTop:5, fontSize:35,fontFamily:'Flaticon', color:'black'}}>A</Text></View>, goto:0 },
]

class HomePage extends Component {

  static route = {
    navigationBar: {
      renderTitle: ()=> <BimodalTitle titles={['Class Library', 'Ms. Stobiergski']} />,
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
            {/* <Image source={require('image!bird_spine')}/> */}
            <BookShelf/>
          </View>
          <View style={{flex:1}}>
            <View style={{flexDirection:'row', flex:1}}>
              <QuestionBubble/>
              <QuestionBubble glow={true}/>
            </View>
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
