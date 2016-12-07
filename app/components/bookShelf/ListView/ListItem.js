import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

const border = (color='blue', size=2) => {return {borderColor:color, borderWidth:size}}

const renderNew = (timeFirstRead) => {
  if (!timeFirstRead) return <Image style={styles.newicon} source={require('./newicon.png')} />
}

export default ListItem = ({title, imageSrc, timeFirstRead, index, dispatch}) => (
  <TouchableOpacity onPress={() => {}}>
    <View style={styles.rowContainer} elevation={2}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            { title }
          </Text>
        </View>

        <View style={styles.imageContainer}>
          <Image style={{flex:1}} source={{uri:imageSrc}} resizeMode={'cover'}/>
          { renderNew(timeFirstRead) }
        </View>

    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  rowContainer: {
    height:87,
    flex:1,
    flexDirection:'row',
    paddingBottom: 9
  },
  titleContainer: {
    flex: 5
  },
  titleText: {
    fontSize:35,
    fontWeight:'bold',
    color:'black'
  },
  imageContainer: {
    flex:3
  },
  newicon: {
    position:'absolute',
    backgroundColor: 'transparent',
    width:50,
    height:50,
    left:2,
    bottom:-2
  }
})
