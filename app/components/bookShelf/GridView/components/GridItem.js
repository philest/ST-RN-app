import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

const border = (color='blue', size=2) => {return {borderColor:color, borderWidth:size}}




// TODO: do something about image rendering at some point...
const renderNew = (timeFirstRead) => {
  if (!timeFirstRead) return (
    <Image
      style={styles.newicon}
      source={require('./newicon.png')}
    />
  )
}

const ITEM_BUFFER = 8
const THUMB_HEIGHT_BUMP = 35

const MAX_COVER_WIDTH = 120
export const MAX_COVER_HEIGHT = 120

const SPACE_BETWEEN_COVERS = 18

const imgBump = 30
export const SPACE_BETWEEN_SHELVES = 32

const renderLeft = (index, itemsPerRow) => {
  return !(index % itemsPerRow) ? 10 : 0;
  // return !(index % itemsPerRow) ? 0 : 10;
}

const renderRight = (index, itemsPerRow) => {
  return ((index % itemsPerRow) == itemsPerRow-1) ? 30 : 0;
  // return ((index % itemsPerRow) == itemsPerRow-1) ? 0 : 30;
}

// TODO: this only works for 2 items per row :)
const alignment = (index, numItems, itemsPerRow) => {
  return ((index + numItems) % itemsPerRow) ? 'flex-end' : 'flex-start'
}

const padGen = (index, numItems, itemsPerRow) => {
  const s = SPACE_BETWEEN_COVERS/2
  return ((index + numItems) % itemsPerRow) ? {marginRight:s} : {marginLeft:s}
}

export default class GridItem extends Component {
 constructor (props) {
    super(props)
  }

  getHeight(w,h) {
      const scaleX = MAX_COVER_WIDTH/w
      const hX = h*scaleX
      // const wX =  MAX_COVER_WIDTH
      //
      // const scaleY = MAX_COVER_HEIGHT/h
      // const hY = MAX_COVER_HEIGHT
      // const wY = w*scaleY

      return (hX < MAX_COVER_HEIGHT) ?   hX : MAX_COVER_HEIGHT
  }

  render() {
    const adjustedHeight = this.getHeight(this.props.imageWidth, this.props.imageHeight)
    return (
      <View style={[styles.rowContainer, {
        alignItems:alignment(this.props.index,this.props.numItems,2),
        }]} >

        <View style={[styles.thumbContainer, {
          ...padGen(this.props.index,this.props.numItems,2),
          height:adjustedHeight}]} >

          <TouchableOpacity
            style={styles.touchable}
            onPress={()=>this.props.onPress(this.props.index)} >

            <Image style={[styles.thumbnail, {height:adjustedHeight}]}
              source={this.props.imageSrc} />
            {/* <Image style={[styles.thumbnail, {width:imgWidth-ITEM_BUFFER, height:imgWidth+imgBump}]} source={imageSrc} /> */}
            {/* { renderNew(this.props.timeFirstRead) } */}
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  rowContainer: {
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-end',
    marginBottom: SPACE_BETWEEN_SHELVES,
    height:MAX_COVER_HEIGHT
    // borderWidth:2,
    // borderColor:'red',
    // backgroundColor:'red',
  },
  thumbContainer: {
    // flex:1,
    // alignSelf:'flex-end',

    width:MAX_COVER_WIDTH,
    // justifyContent:'flex-end',
    // backgroundColor:'green',
    // borderColor: 'green',
    // borderWidth: 2,
  },
  touchable: {
    flex:1,
    // flexDirection:'column',
    // alignItems:'flex-end'
  },
  thumbnail: {
    // flex:1,
    width:MAX_COVER_WIDTH,
    // alignSelf:'flex-end',
    resizeMode: 'contain',
  },
  newicon: {
    position:'absolute',
    backgroundColor: 'transparent',
    width:50,
    height:50,
    left:20,
    bottom:20
  }
})
