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

// TODO: this only works for 2 items per row :)
const alignment = (index, numItems, itemsPerRow) => {
  return ((index + numItems) % itemsPerRow) ? 'flex-end' : 'flex-start';
  // return ((index % itemsPerRow) == itemsPerRow-1) ? 0 : 30;
}

export default GridItem = ({title, timeFirstRead, imageSrc, rowItemWidth, onPress, index, numItems}) => {
  const imgWidth = rowItemWidth*.9
  return (
    <View style={[styles.rowContainer, {alignItems:alignment(index,numItems,2), height:imgWidth+thumbHeightBump, minWidth:rowItemWidth}]} >
      <View  style={[styles.thumbContainer, { width:imgWidth-itemBuffer, height:imgWidth+thumbHeightBump}]} >
        <TouchableOpacity onPress={()=>onPress(index)} >
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
    flex:1,
    flexDirection:'column',
    marginBottom: SPACE_BETWEEN_SHELVES,
    // borderWidth:2,
    // borderColor:'red',
  },
  thumbContainer: {
    flex:1,
    flexDirection:'column',
    // borderColor: 'green',
    // borderWidth: 2,
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
