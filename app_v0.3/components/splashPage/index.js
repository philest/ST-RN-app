import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import { Button, Icon } from 'native-base'
import Router from '../../router'

class SplashPage extends Component {

  render () {
    const b = this.props.book
    const uri= `https://s3.amazonaws.com/st-messenger/day1/${b.awsKey}/${b.awsKey}${1+b.offset}.jpg`
    //TODO: add right arrow to readit button
    return(
      <View style={styles.container}>
        <Image
          style={{width:200, height:300, marginBottom:15, resizeMode:'contain'}}
          source={{uri}} />

          <Button
            success
            large
            iconRight
            style={{alignSelf:'center'}}
            onPress={()=> this.props.onReadItClick(this.props.storyIndex)}>
            Read it!
          </Button>

          {/* <Button
            success
            large
            iconRight
            style={{alignSelf:'center'}}
            onPress={()=> this.props.resetStack() }>
            reset
          </Button> */}

          <View style={{flexDirection:'row', padding:10, width:300}}>
            <View style={{flex:1, flexDirection:'column', justifyContent:'flex-end', paddingRight:20}}>
              <Text style={[styles.text, {color:'black'}]}> 2-4 </Text>
              <Text style={[styles.text]}> Age </Text>
            </View>
            <View style={{flex:1.5,flexDirection:'column', justifyContent:'flex-start'}}>
              <Text style={[styles.text, {color:'black'}]}> 5-20 mins </Text>
              <Text style={[styles.text, ]}> Reading Time </Text>
            </View>
          </View>
      </View>
    )

  }
}





import { batchActions } from 'redux-batched-actions'
import { updateLastTimeRead } from '../bookShelf/BookListActions'
import { setCurrentStoryIndex } from '../bookShelf/BookShelfReducer'
import { NavigationActions } from '@exponent/ex-navigation'

const mapStateToProps = (state) => ({
  // currently selected book
  storyIndex: state.bookShelf.currentStoryIndex,
  book: state.bookList[state.bookShelf.currentStoryIndex]
})

const mapDispatchToProps = (dispatch) => ({
  onReadItClick (index) {
    dispatch(batchActions([
      updateLastTimeRead(index),
      NavigationActions.push('root', Router.getRoute('reader'))
    ]))
  },
  resetStack () {
    dispatch(batchActions([
      NavigationActions.popToTop('root'),
      NavigationActions.popToTop('home') // reset tabs :)
    ]))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage)


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },

  text: {
    fontSize:20
  }
})
