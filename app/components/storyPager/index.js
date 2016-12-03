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


import Swiper from 'react-native-swiper'
import BackBar from './BackNav'

import { setCurrentIndex, showBackBar, hideBackBar } from './state'
import { disableDrawer, enableDrawer, closeDrawer } from 'app/components/readingSuggestion/state'
import { setSelectedBubble } from 'app/components/st-bubbles/state'
import { hideBackBarAndUnselectBubble} from 'app/composedActions'


import StoryPage from './components/storyPage'

class StoryPager extends Component {

  constructor (props) {
    super(props)

    this._toggleNav = this._toggleNav.bind(this)
    this._onMomentumScrollEnd = this._onMomentumScrollEnd.bind(this)
    this._onScrollBeginDrag = this._onScrollBeginDrag.bind(this)

  }


  _toggleNav () {
    if (this.props.backBarHidden) {
      if (!this.props.currentBubble){
        this.props.dispatch(showBackBar())
      } else {
        this.props.dispatch(setSelectedBubble(null))
      }
      return
    }
    this.props.dispatch(hideBackBarAndUnselectBubble())
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
      this.props.dispatch(closeDrawer())
  }


  componentDidMount() {
    // TODO: write a damn test for this
    this.props.dispatch(setCurrentIndex(0));
    this.props.dispatch(enableDrawer())
  }

  componentWillUnmount () {
    this.props.dispatch(disableDrawer())
  }

  _renderPages (pages) {
    return pages.map((p, i) => {
      return <StoryPage key={i} pageInfo={p} onTouchPage={this._toggleNav}/>
    })
  }


  render ()  {
    const info = this.props.storyInfo
    return(
      <View>
        <StatusBar hidden={true} />
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
        <BackBar hideNavBar={this.props.backBarHidden} text={ info.title } onPress={this.props.backAction}/>
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
    bubbles:  book.bubbles[i+1] //TODO: test this...
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
  backBarHidden: !state.components.storyPager.backBarEnabled,
  currentBubble: state.components.stBubbles.selectedBubble
})

export default connect(mapStateToProps)(StoryPager)
