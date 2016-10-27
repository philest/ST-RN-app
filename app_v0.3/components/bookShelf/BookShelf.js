import React, { Component } from 'react'
import {
} from 'react-native'


import {updateLastTimeRead, itemMarkRead} from './BookShelfActions'

import { batchActions } from 'redux-batched-actions'

import STGridView from './GridView'
import STListView from './ListView'

// this is an incredibly dumb hack to make the grid look nice
const _pushDummies = (arr) => [...arr, {dummy:true}, {dummy:true}]


actionBatch = (storyIndex) => {
  return batchActions([
    itemMarkRead(storyIndex),
    updateLastTimeRead(storyIndex)
  ])
}

export default BookShelf = ({visibleBooks, displayFormat, dispatch}) => {
  if (displayFormat == 'grid') return (
    <STGridView
      items={ _pushDummies(visibleBooks) }
      itemsPerRow={ 3 }
      customPress={ (storyIndex) => dispatch(actionBatch(storyIndex)) }
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
