import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  StackNavigation,
  SlidingTabNavigation as TabNavigation,
  SlidingTabNavigationItem as TabItem,
} from '@exponent/ex-navigation';


import Router from '../../router'


export default class TabNavigationExample extends Component {
  static route = {
    navigationBar: {
      title: 'StoryTime',
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
    <TabNavigation
      // position="top"
      id="home"
      navigatorUID="home"
      initialTab="read"
      renderLabel={this._renderLabel}
      barBackgroundColor="#0084FF"
      indicatorStyle={styles.tabIndicator} >
      <TabItem
        id="read"
        navigatorUID='read'>
        <StackNavigation
          id="read"
          initialRoute={Router.getRoute('read')}
        />
      </TabItem>
      <TabItem
        id="messages"
        navigatorUID='messages'>
        <StackNavigation
          id="messages"
          initialRoute={Router.getRoute('messages')}
        />
      </TabItem>
    </TabNavigation>
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
