import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {
  StackNavigation,
  SlidingTabNavigation,
  SlidingTabNavigationItem,
  NavigationActions
} from '@exponent/ex-navigation';

import { connect } from 'react-redux'

import ActionMenu from './ActionMenu'

import Router from '../../router'
import Reader from './BookShelfContainer'
import Messages from './MessagesContainer'

class HomePage extends Component {
  static route = {
    navigationBar: {
      title: 'StoryTime',
       ...SlidingTabNavigation.navigationBarStyles,
    },
  }

  _shortPress = (key) => {
    this.props.navigation.performAction

    getNavigatorByUID('root').jumpToTab(key)
    return NavigationActions.jumpToTab('home',key)
  }

  _renderLabel = ({route}) => {
    let title;
    if (route.key === 'read') {
      title = 'Read';
    } else if (route.key === 'messages') {
      title = 'Messages';
    } else if (route.key === 'poop') {
      title = 'Poop'
    }

    const key =route.key

    return <TouchableOpacity onLongPress={ this.props._toggleDevMenu }
      onPress={() => {
        this.props.navigation.performAction(({ tabs, stacks }) => {
          tabs('home').jumpToTab(route.key);
        });
      }}
     >
      <Text style={styles.tabLabel}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  };

  render () {
    return (

        <SlidingTabNavigation
          id="home"
          navigatorUID="home"
          initialTab="read"
          renderLabel={this._renderLabel}
          barBackgroundColor="#0084FF"
          indicatorStyle={styles.tabIndicator}
          tabBarStyle={{height: 48}} // there was a problem in RN 36 https://github.com/react-native-community/react-native-tab-view/issues/54 TODO
          >
          <SlidingTabNavigationItem id="read">
            <Reader/>
          </SlidingTabNavigationItem>
          <SlidingTabNavigationItem id="messages">
            <Messages />
          </SlidingTabNavigationItem>

        </SlidingTabNavigation>


    )
  }
}


import { toggleDevMenu } from '../devButtons'

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => ({
  _toggleDevMenu: ()=> {
    dispatch(toggleDevMenu())
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
});
