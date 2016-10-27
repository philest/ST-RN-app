import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import {
  SlidingTabNavigation,
  SlidingTabNavigationItem as TabItem,
} from '@exponent/ex-navigation';


export default class Home extends Component {
  static route = {
    navigationBar: {
      title: 'StoryTime',
    }
  }

  render () {
    return (
      <SlidingTabNavigation
              id="main"
              navigatorUID="main"
              initialTab="home">
              <TabItem
                id="home"
                title="Home"
                renderIcon={(isSelected) => <Icon name='md-home' size={32} color='blue' /> }>
                <View>
                  <Text>
                    we home
                  </Text>
                </View>
              </TabItem>

              <TabItem
                id="posts"
                title="Posts"
                renderIcon={(isSelected) => <Icon name='md-clock' size={32} color='blue' /> }>
                <View>
                  <Text>
                    we clockin
                  </Text>
                </View>
              </TabItem>
            </SlidingTabNavigation>
    )
  }
}
