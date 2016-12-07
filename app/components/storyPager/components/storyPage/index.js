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
  Image
} from 'react-native'
// import Image from 'react-native-image-progress'
import { connect } from 'react-redux'

var { height, width } = Dimensions.get('window') // TODO: arggg what do about this

// components
import CanvasAwareBubble from '../canvasBubble'
import { setTextAndSelectBubble } from 'app/composedActions'

// actions
import { setCurrentIndex, showBackBar, hideBackBar } from '../../state'
import { disableDrawer, enableDrawer, closeDrawer } from 'app/components/readingSuggestion/state'
import { setSelectedBubble } from 'app/components/st-bubbles/state'
import { hideBackBarAndUnselectBubble} from 'app/composedActions'

export class StoryPage extends Component {

  constructor (props) {
    super(props)

    this.state = {
      imgWidth: 0,
      imgHeight: 0
    }

    this._toggleNav = this._toggleNav.bind(this)
    this._renderBubbles = this._renderBubbles.bind(this)
    this._setImgDims = this._setImgDims.bind(this)

  }

  _setImgDims (e) {
    this.setState({
      imgWidth: e.nativeEvent.layout.width,
      imgHeight: e.nativeEvent.layout.height
    })
  }

  _renderBubbles(bubbles, pageIndex) {
    if (!bubbles) return null
    return bubbles.map((b,i)=>{
      return <CanvasAwareBubble
        key={`${pageIndex}${i}bbl`}
        imgWidth={this.state.imgWidth} imgHeight={this.state.imgHeight}
        x={b.x} y={b.y}
        text={b.text}
        onPress={setTextAndSelectBubble}
      />
    })
  }


  _toggleNav () {
    if (this.props.backBarHidden) {
      if (!this.props.currentBubble){
        this.props.dispatch(showBackBar())
      } else {
        this.props.dispatch(setSelectedBubble(null))
      }
      this.props.dispatch(closeDrawer())
      return
    }
    this.props.dispatch(hideBackBarAndUnselectBubble())
  }

  render () {
    p = this.props.pageInfo
    return (
      <View  style={ styles.container } >
        <TouchableWithoutFeedback  onPress={ this._toggleNav }>
          <View style={ styles.imgWrapper }>
            <Image
              source         = {{ uri: p.url }}
              indicatorProps = {{ size: 80, color: 'pink', style: { backgroundColor:'black' }}}
              resizeMode     =  'contain'
              style          = { styles.img }
              threshold      = { 200 }
              onLayout       = { this._setImgDims }
              //renderIndicator= { () => <Spinner color='white' type='Wave'/> }
            />
          </View>
        </TouchableWithoutFeedback>
        { this._renderBubbles(p.bubbles, p.i) }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  backBarHidden: !state.components.storyPager.backBarEnabled,
  currentBubble: state.components.stBubbles.selectedBubble,
})

export default connect(mapStateToProps)(StoryPage)

const styles = StyleSheet.create({
  img: {
    flex: 1
  },
  imgWrapper: {
    flex:1,
    alignSelf:'center',
    maxHeight:height,
    minWidth:width,
  },
  container: {
    flex:1,
    backgroundColor:'black'
  },
})
