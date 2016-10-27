import React, { Component } from 'react'
import {
} from 'react-native'


import { updateLastTimeRead, itemMarkRead } from './BookListActions'
import { setCurrentStoryIndex } from './BookShelfReducer'
import { batchActions } from 'redux-batched-actions'



import { NavigationActions } from '@exponent/ex-navigation'
import Router                from '../../router'


import STGridView from './GridView'
import STListView from './ListView'

// this is an incredibly dumb hack to make the grid look nice
const _pushDummies = (arr) => [...arr, {dummy:true}, {dummy:true}]


actionBatch = (storyIndex, navUID) => {
  return batchActions([
    setCurrentStoryIndex(storyIndex),
    itemMarkRead(storyIndex),
    updateLastTimeRead(storyIndex),
    NavigationActions.push(navUID, Router.getRoute('splash'))
  ])
}

export default BookShelf = ({visibleBooks, displayFormat, navigation, dispatch}) => {
  if (displayFormat == 'grid') return (
    <STGridView
      items={ _pushDummies(visibleBooks) }
      itemsPerRow={ 3 }
      customPress={ (storyIndex) => dispatch(actionBatch(storyIndex, navigation.currentNavigatorUID)) }
    />
  )
  else return (
    <STListView
      items={visibleBooks}
      onEndReachedThreshold={60}
      customPress={ (storyIndex) => dispatch(actionBatch(storyIndex)) }
    />
  )
}
