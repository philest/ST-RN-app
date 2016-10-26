import React, { Component } from 'react'
import {
  ListView, Text, UIManager
} from 'react-native'
UIManager.setLayoutAnimationEnabledExperimental &&   UIManager.setLayoutAnimationEnabledExperimental(true);

import STGridView from './gridView'
import STListView from './listView'

// this is an incredibly dumb hack to make the grid look nice
const _pushDummies = (arr) => [...arr, {dummy:true}, {dummy:true}]

export default BookShelf = ({visibleBooks, displayFormat}) => {
  if (displayFormat == 'grid') return (
    <STGridView
      items={ _pushDummies(visibleBooks) }
      itemsPerRow={ 3 }
    />
  )
  else return (
    <STListView
      items={visibleBooks}
      onEndReachedThreshold={60}
    />
  )
}
