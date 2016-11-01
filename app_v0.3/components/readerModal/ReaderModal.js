import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ListView,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback
} from 'react-native'



import BackBar from './BackNav'

import Swiper from 'react-native-swiper'
import Image from 'react-native-image-progress'

var { height, width } = Dimensions.get('window');

export default class STSwiper extends Component {

  constructor (props) {
    super(props)

    this._toggleNav = this._toggleNav.bind(this)
    this.state = {
      hideNavBar: true
    }
  }

  _renderPages (pages) {
    return pages.map((url, i) => {
      return (
        <TouchableWithoutFeedback key={i} onPress={ this._toggleNav }>
          <View  style={ styles.container } >
            <View style={ styles.imgWrapper }>
              <Image
                source         = {{uri: url}}
                //renderIndicator= { () => <Spinner color='white' type='Wave'/> }
                indicatorProps = {{size: 80, color: 'pink', style: { backgroundColor:'black' }}}
                resizeMode     =  'contain'
                style          = { styles.img }
                threshold      = { 200 }
              />
            </View>
          </View>
        </TouchableWithoutFeedback>

    )
    })
  }

  _toggleNav () {
    // console.log(this.state.hideNavBar);
    this.setState({
      hideNavBar: !this.state.hideNavBar
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

          // onMomentumScrollEnd = { this._onMomentumScrollEnd }
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
