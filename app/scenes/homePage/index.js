import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ViewPagerAndroid
} from 'react-native';
import {
  StackNavigation,
  SlidingTabNavigation,
  SlidingTabNavigationItem,
  NavigationActions,
  UIManager
} from '@exponent/ex-navigation';

import { connect } from 'react-redux'

import ActionMenu from './ActionMenu'

import Router from 'app/router'
import BookShelf from './BookShelf'
import Messages from './Messages'

import {ViewPager} from 'rn-viewpager';

import Icon from 'react-native-vector-icons/Ionicons'

import { BimodalTitle, BimodalButton} from './navbarComponents'


// const setPage = (selectedPage: number) => {
//  UIManager.dispatchViewManagerCommand(
//    ReactNative.findNodeHandle('viewPager'),
//    UIManager.AndroidViewPager.Commands.setPage,
//    [selectedPage],
//  );
// };

const BUTTON_SIZE = 45

const makeButton = (size, name, style={}, onPress=()=>{}) => {
  return <Icon name={name} size={size} style={[styles.navButton, style]} />
}


class HomePage extends Component {
  static route = {
    navigationBar: {
      renderTitle: ()=> <BimodalTitle titles={['Class Library', 'Ms. Stobierski']} />,
      renderRight: ()=> <BimodalButton
                          position='right'
                          buttons={[
                            {button:makeButton(BUTTON_SIZE, 'md-arrow-round-forward'), goto:1},
                            {button:makeButton(BUTTON_SIZE, 'md-information-circle')},
                          ]}
                        />,
      renderLeft:  ()=> <BimodalButton
                          position='left'
                          buttons={[
                            {buttons:null},
                            {button:makeButton(BUTTON_SIZE, 'md-apps'), goto:0},
                          ]}
                        />,
    },
  }

  static setPage (index) {
    alert(index)
    return index
  }

  constructor (props) {
    super(props)

    this.state = {
      initPage: this.props.homePage.index
    }
  }

  _shortPress = (key) => {
    this.props.navigation.performAction

    getNavigatorByUID('root').jumpToTab(key)
    return NavigationActions.jumpToTab('home',key)
  }

  render () {
    const MAGIC_NUMBER = 24

    return (
        <ViewPagerAndroid
          ref={this.props.setPager}
          style={{flex:1, marginBottom:MAGIC_NUMBER}}
          initialPage={this.state.initPage}
          keyboardDismissMode='on-drag'
          onPageSelected={this.props.updateHomePageIndex}
        >
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


import { toggleDevMenu } from 'app/components/devButtons'
import { setHomePageIndex, setPagerRef } from './state'
const mapStateToProps = (state) => ({
  homePage: state.scenes.homePage
})

const mapDispatchToProps = (dispatch) => ({
  _toggleDevMenu: ()=> {
    dispatch(toggleDevMenu())
  },
  updateHomePageIndex: (e) => {
    dispatch(setHomePageIndex(e.nativeEvent.position))
  },
  setPager: (pager) => {
    dispatch(setPagerRef(pager))
  }
})


export default connect(mapStateToProps,mapDispatchToProps)(HomePage)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  tabLabel: {
    margin: 8,
    fontSize: 13,
    color: '#fff',
  },
  tabIndicator: {
    backgroundColor: '#FFEB3B',

  },
  selectedTab: {
    backgroundColor: '#0084FF',
  },
  navButtons: {
    color:'black'
  }
});
