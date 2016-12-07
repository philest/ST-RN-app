import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ListView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar
} from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash' // TODO: get this outta here?

// components
import Swiper from 'app/vendor/react-native-swiper'
import AlertBar from './components/alertBar'
import StoryPage from './components/storyPage'

// actions
import { setCurrentIndex } from './state'
import { closeDrawer } from 'app/components/readingSuggestion/state'
import { hideBackBarAndUnselectBubble} from 'app/composedActions'

class StoryPager extends Component {

  constructor (props) {
    super(props)
    this._onMomentumScrollEnd = this._onMomentumScrollEnd.bind(this)
    this._onScrollBeginDrag = this._onScrollBeginDrag.bind(this)

  }

  _onMomentumScrollEnd(e, state, context) {
    const oldIndex = this.props.currentIndex
    const currentIndex = state.index
    this.props.dispatch(setCurrentIndex(state.index))
    if (oldIndex != currentIndex) {
      this.props.dispatch(closeDrawer())
    }
  }

  _onScrollBeginDrag() {
    this.props.dispatch(hideBackBarAndUnselectBubble())
  }

  componentDidMount() {
    // TODO: write a damn test for this
    this.props.dispatch(setCurrentIndex(0));
  }

  componentWillUnmount () {
    this.props.dispatch(disableDrawer())
    this.props.dispatch(hideBackBar())
  }

  _renderPages (pages) {
    return pages.map((p, i) => {
      return <StoryPage key={i} pageInfo={p}/>
    })
  }


  render ()  {
    const info = this.props.storyInfo
    return(
      <View>
        <Swiper
          index               = { this.props.savedPageNum || 0 }
          style               = { styles.swiper }
          loop                = { false }
          showsPagination     = { false }
          onScrollBeginDrag = { this._onScrollBeginDrag } // TODO: test this on iOS :/
          // renderPagination    = { this._renderPagination }
        >
          { this._renderPages( info.pagesToRender ) }
        </Swiper>
        <AlertBar titleText={info.title} onPress={this.props.backAction }/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  swiper: {
    alignSelf: 'flex-start',
    backgroundColor:'black'
  },
})

const storyInfo = (book, storyIndex) => {

  if (!book) return {}

  const numPages = book.numPages
  const offset   = book.offset
  const awsKey   = book.awsKey
  const pagesToRender = _.times(numPages-offset, (i) => ({
    i,
    url:`https://s3.amazonaws.com/st-messenger/day1/${awsKey}/${awsKey}${i+1+offset}.jpg`,
    coverDims: book.coverDims,
    bubbles: (book.bubbles) ? book.bubbles[i+1] : [] //TODO: test this...
  }))
  const storyInfo = {
    title: book.title,
    description: book.description,
    pagesToRender: pagesToRender,
  }

  return storyInfo
}

const mapStateToProps = (state) => ({
  storyInfo: storyInfo(state.data.user.bookList[state.components.bookShelf.currentStoryIndex], state.components.bookShelf.currentStoryIndex),
  currentIndex: state.components.storyPager.currentIndex,
})

export default connect(mapStateToProps)(StoryPager)
