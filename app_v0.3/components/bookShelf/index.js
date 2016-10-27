import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
// import LibraryContainer from './LibraryContainer'
import BookShelf from './BookShelf'

const ALL = 'ALL'

const getVisibleBooks = (books, filter=ALL) => {
  console.log(books);
  switch (filter) {
    case ALL:
      const filteredbook = books.filter(t => t.timeRevealedAt).map((r,i)=> Object.assign({}, r, {key:i}))
      return filteredbook.reverse()
    default:
      throw new Error('Erm, idk about that filter, brew: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  visibleBooks: getVisibleBooks(state.bookList, ALL),
  displayFormat: state.bookShelf.bookShelfDisplayFormat,
  navigation: state.navigation
})

export default connect(mapStateToProps)(BookShelf)
