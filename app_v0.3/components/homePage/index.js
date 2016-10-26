import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Read from '../library'
import SikButts from '../devButtons'

export default HomePage = () => (
  <ScrollableTabView
    locked={true}
    tabBarPosition='bottom'
  >
    <View tabLabel='read' style={{flex:1}}>
      <Read/>
      <SikButts style={{position:'absolute'}}/>
    </View>
    <Text tabLabel='messages'>yo messages!!!</Text>
  </ScrollableTabView>
)
