import React from 'react'
import { connect } from 'react-redux'
import ReaderModal from './ReaderModal'
import _ from 'lodash'


const storyInfo = (book, storyIndex) => {

  if (!book) return {}

  const numPages = book.numPages
  const offset   = book.offset
  const awsKey   = book.awsKey
  const pagesToRender = _.times(numPages-offset, (i) => `https://s3.amazonaws.com/st-messenger/day1/${awsKey}/${awsKey}${i+1+offset}.jpg`)
  
  const storyInfo = {
    title: book.title,
    description: book.description,
    pagesToRender: pagesToRender
  }

  return storyInfo
}

const mapStateToProps = (state) => ({
  storyInfo: storyInfo(state.bookList[state.bookShelf.currentStoryIndex], state.bookShelf.currentStoryIndex)
})

export default connect(mapStateToProps)(ReaderModal)
