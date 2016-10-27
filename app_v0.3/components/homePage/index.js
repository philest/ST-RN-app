import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  TabNavigation,
  TabNavigationItem,
} from '@exponent/ex-navigation';

import BookShelf from './BookShelfContainer'
import Messages  from './MessagesContainer'

export default class TabNavigationExample extends Component {
  static route = {
    // navigationBar: {
    //   title: 'StoryTime',
    //   ...TabNavigation.navigationBarStyles,
    // },
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
    <View style={{flex:1}}>
      <TabNavigation
        position="top"
        id="tab-navigation"
        navigatorUID="tab-navigation"
        initialTab="read"
        renderLabel={this._renderLabel}
        // barBackgroundColor="#0084FF"
        // indicatorStyle={styles.tabIndicator}
        >
        <TabNavigationItem id="read">
          <BookShelf /> PUT THIS IN A FUCKING STACK SHIT FUCK SHIT
        </TabNavigationItem>
        <TabNavigationItem id="messages">
          <Messages />
        </TabNavigationItem>
      </TabNavigation>
    </View>

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
