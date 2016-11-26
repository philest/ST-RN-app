import React, { Component } from 'react'
import {
} from 'react-native'

import { updateLastTimeRead, itemMarkRead } from './BookListActions'
import { setCurrentStoryIndex } from './BookShelfReducer'
import { batchActions } from 'redux-batched-actions'

import { NavigationActions } from '@exponent/ex-navigation'
import Router                from 'app/router'

import STGridView from './GridView'
import STListView from './ListView'

// this is an incredibly dumb hack to make the grid look nice
const _pushDummies = (arr) => [...arr, {dummy:true}, {dummy:true}]

actionBatch = (storyIndex) => {
  return batchActions([
    setCurrentStoryIndex(storyIndex),
    itemMarkRead(storyIndex), //TODO: change this api...
    NavigationActions.push('root', Router.getRoute('storySplashPage'))
  ])
}

export default BookShelf = ({visibleBooks, displayFormat, navigation, dispatch}) => {
  if (displayFormat == 'grid') return (
    <STGridView
      items={ _pushDummies(visibleBooks) }
      itemsPerRow={ 2 }
      customPress={ (storyIndex) => dispatch(actionBatch(storyIndex)) }
    />
  )
  else return (
    <STListView
      items={visibleBooks}
      onEndReachedThreshold={60} // TODO: what does this do again?
      customPress={ (storyIndex) => dispatch(actionBatch(storyIndex)) }
    />
  )
}
