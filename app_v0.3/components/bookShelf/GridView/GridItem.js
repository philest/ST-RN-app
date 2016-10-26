import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'


const border = (color='blue', size=2) => {return {borderColor:color, borderWidth:size}}

// TODO: do something about image rendering at some point...
const renderNew = (timeFirstRead) => {
  if (!timeFirstRead)
    return (
      <Image
        style={styles.newicon}
        source={require('./newicon.png')}
      />
    )
}

const itemBuffer = 8
const thumbHeightBump = 25

export default GridItem = ({title, timeFirstRead, imageSrc, rowItemWidth, customPress}) => (
    <View style={[styles.rowContainer, {height:rowItemWidth+thumbHeightBump, minWidth:rowItemWidth}]} >
      <View  style={[styles.thumbContainer, {width:rowItemWidth-itemBuffer, height:rowItemWidth+thumbHeightBump}]} >
        <TouchableOpacity onPress={customPress} >
          <Image style={[styles.thumbnail, {minWidth:rowItemWidth-itemBuffer, minHeight:rowItemWidth+thumbHeightBump}]} source={{uri:imageSrc}} />
          { renderNew(timeFirstRead) }
        </TouchableOpacity>
      </View>
    </View>
)


const styles = StyleSheet.create({
  rowContainer: {
    flexDirection:'column',
    marginBottom: 20,
    // borderWidth:2,
    // borderColor:'red',
  },
  thumbContainer: {
    flexDirection:'row',
    // borderColor: 'green',
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
    left:5,
    bottom:-2
  }
})
