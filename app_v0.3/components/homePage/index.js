import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  StackNavigation,
  SlidingTabNavigation,
  SlidingTabNavigationItem
} from '@exponent/ex-navigation';


import Router from '../../router'
import Reader from './BookShelfContainer'
import Messages from './MessagesContainer'

export default class TabNavigationExample extends Component {
  static route = {
    navigationBar: {
      title: 'StoryTime',
       ...SlidingTabNavigation.navigationBarStyles,
    },
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
    return <Text style={styles.tabLabel}>{title.toUpperCase()}</Text>;
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
