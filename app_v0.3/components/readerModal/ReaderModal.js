import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ListView,
  TouchableOpacity,
  Modal
} from 'react-native'

import Swiper from 'react-native-swiper'
import Spinner from 'react-native-spinkit'
import Image from 'react-native-image-progress'

var { height, width } = Dimensions.get('window');

const renderPages = (pages) => {
  return pages.map((url, i) => {
    return (
      <View key={i} style={ sty.page.container }>
      <View style={ sty.page.imgWrapper }>
        <Image
          source         = {{uri: url}}
          renderIndicator= { () => <Spinner color='white' type='Wave'/> }
          indicatorProps = {{size: 80, color: 'pink', style: { backgroundColor:'black' }}}
          resizeMode     =  'contain'
          style          = { sty.page.img }
          threshold      = { 200 }
        />
      </View>
    </View>
  )
  })
}

export default STSwiper = ({storyInfo, savedPageNum}) => (
  <Swiper
    index               = { savedPageNum || 0 }
    style               = { sty.swiper }
    loop                = { false }
    showsPagination     = { false }
    // onMomentumScrollEnd = { this._onMomentumScrollEnd }
    // renderPagination    = { this._renderPagination }
  >
    { renderPages(storyInfo.pagesToRender) }
  </Swiper>
)


const sty = {
  //TODO convert into stylesheet
  paginator: {
    wrapper: {
      position: 'absolute',
      bottom: 30,
      right: 10,
    },
    text: {
        color: '#007aff',
        fontSize: 20
    }
  },

  page : {
    container: {
      flex:1,
      backgroundColor:'black'
    },
    img: {
      flex: 1
    },
    imgWrapper: {
      flex:1,
      alignSelf:'center',
      maxHeight:height-30,
      minWidth:width
    },
  },

  swiper: {
    alignSelf: 'flex-start',
    backgroundColor:'black'
  },
}
