import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import {
  SlidingTabNavigation,
  SlidingTabNavigationItem,
} from '@exponent/ex-navigation';

import BookShelf from './BookShelfContainer'
import Messages  from './MessagesContainer'

export default class SlidingTabNavigationExample extends Component {
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
    }

    return <Text style={styles.tabLabel}>{title.toUpperCase()}</Text>;
  };

  render () {return (
    <SlidingTabNavigation
      position="top"
      id="tab-navigation"
      navigatorUID="tab-navigation"
      initialTab="read"
      renderLabel={this._renderLabel}
      barBackgroundColor="#0084FF"
      indicatorStyle={styles.tabIndicator}>
      <SlidingTabNavigationItem id="read">
        <BookShelf />
      </SlidingTabNavigationItem>
      <SlidingTabNavigationItem id="messages">
        <Messages />
      </SlidingTabNavigationItem>
    </SlidingTabNavigation>
  )}
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
