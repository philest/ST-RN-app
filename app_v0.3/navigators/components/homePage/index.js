import React from 'react';
import {
  Text,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import Read from '../library'


export default HomePage = () => (
  <ScrollableTabView
    locked={true}
  >
    <Read tabLabel='read'/>
    <Text tabLabel='messages'>message here!</Text>
  </ScrollableTabView>;
)
