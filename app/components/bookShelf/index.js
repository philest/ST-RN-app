import React, { Component }     from 'react'

import { connect }              from 'react-redux'
import { batchActions }         from 'redux-batched-actions'
import { NavigationActions }    from '@exponent/ex-navigation'

import Router                   from 'app/router'
import {
  itemUpdateLastTimeRead,
  itemMarkRead }                from 'app/data/user/bookList/bookListActions'
import { setCurrentStoryIndex } from './state'
import STGridView               from './GridView'
import STListView               from './ListView'

// this is an incredibly dumb hack to make the grid look nice
const _pushDummies = (arr) => [...arr, {dummy:true}, {dummy:true}]
// const _pushDummies = (arr) => [...arr,]
 

actionBatch = (storyIndex) => {
  return batchActions([
    setCurrentStoryIndex(storyIndex),
    itemMarkRead(storyIndex), //TODO: change this api...
    NavigationActions.push('root', Router.getRoute('storySplashPage'))
  ])
}

export const BookShelf = ({visibleBooks, displayFormat, navigation, dispatch}) => {
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


const ALL = 'ALL'

const getVisibleBooks = (books, filter=ALL) => {
  // console.log(books);
  switch (filter) {
    case ALL:
      const filteredbook = books.filter(t => t.timeRevealedAt).map((r,i)=> Object.assign({}, r, {key:i}))
      return filteredbook.reverse()
    default:
      throw new Error('ERR: invalid book filter' + filter)
  }
}

const mapStateToProps = (state) => ({
  visibleBooks: getVisibleBooks(state.data.user.bookList, ALL),
  displayFormat: state.components.bookShelf.bookShelfDisplayFormat
})

export default connect(mapStateToProps)(BookShelf)
