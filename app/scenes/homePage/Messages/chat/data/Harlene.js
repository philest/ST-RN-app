import React, { component } from 'react'
import { Image, StyleSheet } from 'react-native'

export default ()=><Image source={require('./harlene.png')} style={styles.avatarStyle}/>

const styles = StyleSheet.create({
  avatarStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    borderRadius: 18,
  }
}
)
