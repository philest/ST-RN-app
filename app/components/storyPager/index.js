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
import Image from 'react-native-image-progress'
import BackBar from './BackNav'

import { setCurrentIndex } from './state'
import { disableDrawer, enableDrawer, closeDrawer } from 'app/components/readingSuggestion'

var { height, width } = Dimensions.get('window') // TODO: arggg what do about this

class StoryPager extends Component {

  constructor (props) {
    super(props)

    this._toggleNav = this._toggleNav.bind(this)
    this.state = {
      hideNavBar: true
    }
    this._onMomentumScrollEnd = this._onMomentumScrollEnd.bind(this)
  }

  _renderPages (pages) {
    return pages.map((p, i) => {
      return (
        <View  key={i} style={ styles.container } >
          <StatusBar hidden={true} />
          <TouchableWithoutFeedback  onPress={ this._toggleNav }>
            <View style={ styles.imgWrapper }>
              <Image
              source         = {{uri: p.url}}
              //renderIndicator= { () => <Spinner color='white' type='Wave'/> }
              indicatorProps = {{size: 80, color: 'pink', style: { backgroundColor:'black' }}}
              resizeMode     =  'contain'
              style          = { styles.img }
              threshold      = { 200 }
              />
            </View>
          </TouchableWithoutFeedback>
          { p.bubble }
          {/* <BubblesView bubblesToRender={} /> */}
        </View>
      )
    })
  }

  _toggleNav () {
    this.setState({
      hideNavBar: !this.state.hideNavBar
    })
  }

  _onMomentumScrollEnd(e, state, context) {
    const oldIndex = this.props.currentIndex
    this.props.dispatch(setCurrentIndex(state.index))
    if (oldIndex != this.props.currentIndex) {
      this.props.dispatch(closeDrawer())
    }
  }

  componentDidMount() {
    // TODO: write a damn test for this
    this.props.dispatch(setCurrentIndex(0));
    this.props.dispatch(enableDrawer())
  }

  componentWillUnmount () {
    this.props.dispatch(disableDrawer())
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
          onMomentumScrollEnd = { this._onMomentumScrollEnd }
          // renderPagination    = { this._renderPagination }
        >
          { this._renderPages( info.pagesToRender ) }
        </Swiper>
        <BackBar hideNavBar={this.state.hideNavBar} text={ info.title } onPress={this.props.backAction}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  swiper: {
    alignSelf: 'flex-start',
    backgroundColor:'black'
  },
  img: {
    flex: 1
  },
  imgWrapper: {
    flex:1,
    alignSelf:'center',
    maxHeight:height,
    minWidth:width
  },
  container: {
    flex:1,
    backgroundColor:'black'
  },
})

const storyInfo = (book, storyIndex) => {

  if (!book) return {}

  const numPages = book.numPages
  const offset   = book.offset
  const awsKey   = book.awsKey
  const pagesToRender = _.times(numPages-offset, (i) => ({

    url:`https://s3.amazonaws.com/st-messenger/day1/${awsKey}/${awsKey}${i+1+offset}.jpg`,
    bubble: (i%2)? <View style={{position:'absolute', backgroundColor:
    'red',width:20, height:20, top:0, left:0}}/> : null

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
  currentIndex: console.log(state),
})

export default connect(mapStateToProps)(StoryPager)
