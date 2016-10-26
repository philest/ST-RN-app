import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Navigator, TouchableOpacity } from 'react-native'

// import LibraryContainer from './LibraryContainer'
import LibraryContainer from './GridTempContainer'

const barHeight = 80

export default LibraryView = () => (
  <View style={{flex:1}}>

    {/* TODO: probably delete this. Topbar handled by exponent
      <View>
      <View style={styles.topBar}>
        <View style={{flex:3}}>
          <Image source={require('../../assets/img/st_logo.png')} resizeMode={'contain'} style={[styles.image, {marginLeft:20, width:200}]}/>
        </View>
        <View style={{flex:1}}>
          <Image source={require('../../assets/img/sammy.png')}   resizeMode={'contain'} style={[styles.image, {alignSelf:'flex-start', width:70}]}/>
        </View>
      </View>
    </View> */}
    <LibraryContainer />
   </View>

)


const styles = StyleSheet.create({
  topBar:{
    flexDirection:'row',
    justifyContent:'flex-start',
    flex:1,
    height:barHeight,
    backgroundColor:'lightgrey'
  },
  shadow: {
    height: barHeight+2,
    width: 500,
    position:"absolute",
    backgroundColor:"rgba(0, 0, 0, 1)"
  },
  image: {
    height:barHeight,
  }
})
