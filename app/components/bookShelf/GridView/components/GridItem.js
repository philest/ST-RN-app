import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

const border = (color='blue', size=2) => {return {borderColor:color, borderWidth:size}}


export const SPACE_BETWEEN_SHELVES = 40


// TODO: do something about image rendering at some point...
const renderNew = (timeFirstRead) => {
  if (!timeFirstRead) return (
    <Image
      style={styles.newicon}
      source={require('./newicon.png')}
    />
  )
}

const itemBuffer = 8
const thumbHeightBump = 38
const imgBump = 35

const renderLeft = (index, itemsPerRow) => {
  return !(index % itemsPerRow) ? 10 : 0;
  // return !(index % itemsPerRow) ? 0 : 10;
}

const renderRight = (index, itemsPerRow) => {
  return ((index % itemsPerRow) == itemsPerRow-1) ? 30 : 0;
  // return ((index % itemsPerRow) == itemsPerRow-1) ? 0 : 30;
}

export default GridItem = ({title, timeFirstRead, imageSrc, rowItemWidth, customPress, index}) => {
  const imgWidth = rowItemWidth*.9
  return (
    <View style={[styles.rowContainer, {left:renderLeft(index,2), paddingRight:renderRight(index,2), height:imgWidth+thumbHeightBump, minWidth:rowItemWidth}]} >
      <View  style={[styles.thumbContainer, { width:imgWidth-itemBuffer, height:imgWidth+thumbHeightBump, backgroundColor:'pink'}]} >
        <TouchableOpacity onPress={()=>customPress(index)} >
          <Image style={[styles.thumbnail, {minWidth:imgWidth-itemBuffer, minHeight:imgWidth+imgBump}]} source={imageSrc} />
          {/* <Image style={[styles.thumbnail, {width:imgWidth-itemBuffer, height:imgWidth+imgBump}]} source={imageSrc} /> */}
          { renderNew(timeFirstRead) }
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  rowContainer: {
    flexDirection:'column',
    marginBottom: SPACE_BETWEEN_SHELVES,
    borderWidth:2,
    borderColor:'red',
  },
  thumbContainer: {
    flexDirection:'column',
    borderColor: 'green',
    // borderWidth: 2,
    alignSelf: 'center'
  },
  thumbnail: {
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
