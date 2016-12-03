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
} from 'react-native'

import Image from 'react-native-image-progress'

var { height, width } = Dimensions.get('window') // TODO: arggg what do about this
import CanvasAwareBubble from '../canvasBubble'

export default class StoryPager extends Component {

  constructor (props) {
    super(props)

    this.state = {
      imgWidth: 0,
      imgHeight: 0
    }

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
      />
    })
  }


  render () {
    p = this.props.pageInfo
    return (
      <View  style={ styles.container } >
        <TouchableWithoutFeedback  onPress={ this.props.onTouchPage }>
          <View style={ styles.imgWrapper }>
            <Image
              source         = {{uri: p.url}}
              indicatorProps = {{size: 80, color: 'pink', style: { backgroundColor:'black' }}}
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
