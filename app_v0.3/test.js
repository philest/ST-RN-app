import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

import FitImage from 'react-native-fit-image'

const border = (color='blue', size=2) => {return {borderColor:color, borderWidth:size}}

const TEST_BOOK = 'https://s3.amazonaws.com/st-messenger/day1/chores/chores1.jpg'


const IMG_INNER = 200
const IMG_PADDING = 20
const IMG_OUTER = IMG_INNER + IMG_PADDING
const SPINE_WIDTH = 10







class FunImage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
      displayWidth: 0,
      displayHeight: 0,
      hwratio: 1
    }
  }

  componentDidMount () {
    Image.getSize(this.props.source.uri, (width, height) => {
      this.setState({width, height, hwratio: (width/height)});
    })
  }

  render () {
    return (
      <View style={{height:this.props.height, width:(this.props.height/this.state.hwratio)}}>
        <Text>
          {this.props.titleText}
        </Text>
        <Image
          style={{
            position:'absolute',
            top: 0,
            width: (this.props.height*this.state.hwratio),
            height: this.props.height,
          }}
          source={this.props.source} />
      </View>
    )
  }
}


import { ParallelogramHoriz, Parallelogram } from './shapes'

export default Test = () => (
  <View style={[styles.container]}>
    <View style={{width:IMG_OUTER, height:IMG_OUTER, backgroundColor:'green' }}>
      <View style={{margin:IMG_PADDING, flex:1, backgroundColor:'pink', flexDirection:'row', alignItems:'flex-start'}}>
        {/* <View style={{backgroundColor:'blue', height: IMG_INNER, width:200}}> */}
          {/* <View style={{ height:IMG_INNER-IMG_PADDING, width:250, backgroundColor:'blue', alignSelf:'flex-start'}}> */}
            {/* <FitImage originalHeight={IMG_INNER} originalWidth={IMG_INNER} resizeMode='contain' source={{uri:TEST_BOOK}} /> */}
            {/* <Image resizeMode='contain' style={styles.thumbnail} source={{uri:TEST_BOOK}} /> */}
          {/* </View> */}
          <View style={styles.spine}/>
          <FunImage source={{uri:TEST_BOOK}} height={IMG_INNER-IMG_PADDING} titleText="Hey there"/>

        {/* </View> */}
      </View>
    </View>
    {/* <View style={styles.spine}/> */}
    {/* <TriangleCorner style={{borderRightWidth:100, borderTopWidth:50}} /> */}
    {/* <TriangleUp style={{borderBottomWidth:50}} /> */}
    {/* <TriangleUp style={{borderBottomWidth:25}} /> */}
    {/* <TriangleRight/> */}
    <View style={{width:100, height:200, flexDirection:'column'}}>
      <View style={{top:215, transform:[{scale:2}]}}>
        <ParallelogramHoriz height={15} width={100} />
      </View>
      <Parallelogram height={200} width={15} color='black' />
    </View>
  </View>
)


const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  thumbnail: {
    resizeMode: 'contain',
    width: IMG_INNER,
    height: IMG_INNER- IMG_PADDING,
    // alignSelf:'flex-start',

  },
  icon: {
    position:'absolute',
    backgroundColor: 'transparent',
    width:50,
    height:50,
    left:5,
    bottom:-2
  },
  spine: {
    height:IMG_INNER,
    width:20,
    backgroundColor:'black',
    transform: [
      {'rotateY': '15deg'},
      // {'skewY' : '40deg'},
      // {'perspective' : 50}
    ]
  }
})
