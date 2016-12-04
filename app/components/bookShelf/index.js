import React, { Component }     from 'react'
import { connect }              from 'react-redux'

import STGridView               from './GridView'
import STListView               from './ListView'

import { pushStorySplashPage }      from 'app/composedActions'

import { View, Text } from 'react-native'

import Header from './BookShelfHeader'

// this is an incredibly dumb hack to make the grid look nice
const _pushDummies = (arr) => [...arr, {dummy:true}, {dummy:true}]

export const BookShelf = ({visibleBooks, displayFormat, navigation, dispatch}) => {
  if (displayFormat == 'grid') return (
    <STGridView
      items={ _pushDummies(visibleBooks) }
      itemsPerRow={ 2 }
      onPress={ (storyIndex) => dispatch(pushStorySplashPage(storyIndex)) }
      renderHeader={()=><Header />}
    />
  )
  else return (
    <STListView
      items={visibleBooks}
      onEndReachedThreshold={60} // TODO: what does this do again?
      customPress={ (storyIndex) => dispatch(pushStorySplashPage(storyIndex)) }
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
