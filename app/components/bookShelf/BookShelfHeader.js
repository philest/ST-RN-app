import React, { Component }     from 'react'
import { View, StyleSheet } from 'react-native'

import Text from 'app/assets/font/STTextRegular'

export default Header = ({teacherName}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.yourBooks}>
      Your Books
      </Text>
      <Text style={styles.from}>
        from Ms. Stobierski
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 13,
    paddingBottom:30,
    alignItems:'center',
    justifyContent:'center'
  },
  yourBooks: {
    backgroundColor:'transparent',
    fontSize:30,
    fontWeight:'bold',
    color:'black'
  },
  from: {
    fontSize:15
  }
})
