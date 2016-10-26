import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native'

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
  visibleBooks: getVisibleBooks(state.libraryList, ALL),
  displayFormat: state.bookShelfDisplayFormat
})

export default connect(mapStateToProps)(BookShelf)
