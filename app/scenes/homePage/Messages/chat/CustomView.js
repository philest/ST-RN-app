import React, { Component } from 'react'
import {
  Linking,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text
} from 'react-native'

import store      from 'app/createStore'

import { bookListArray } from 'app/data/user/bookList/state'
import { pushStorySplashPage } from 'app/composedActions'

const COVER_WIDTH = 170

const pushStory = (i) => store.dispatch(pushStorySplashPage(i))

export default class CustomView extends Component {
  render() {
    const sindex = this.props.currentMessage.newStory

    if (sindex) {
      const s = bookListArray[sindex]
      const newStorySrc = {uri:`${s.awsKey}_spine`}
      return (
        <View style={styles.container}>
          <View style={styles.imgWrapper}>
            <View style={styles.imageTransform}>
              <TouchableOpacity onPress={()=>pushStory(sindex)}>
                <Image style={styles.image} source={newStorySrc} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.textWrap} onPress={()=>pushStory(sindex)}>
              <Text style={styles.tapRead}> Tap to read! </Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    return null
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    height:260
  },
  imgWrapper: {
    flex:1,
    paddingLeft:20,
    paddingRight:20,
    marginTop:12,
    marginBottom:15,
    alignItems:'center'
  },
  mapView: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
  },
  tapRead: {
    color:'black',
    fontSize:20,
    left: 5
  },
  textWrap: {
    flex:1,
    top:10
  },
  image: {
    width: COVER_WIDTH,
    height: COVER_WIDTH,
    resizeMode: 'contain'
  },
  imageTransform: {
    transform:[{rotateZ:'-5deg'}]
  }
});

CustomView.defaultProps = {
  currentMessage: {},
  containerStyle: {},
};

CustomView.propTypes = {
  currentMessage: React.PropTypes.object,
  containerStyle: View.propTypes.style,
};
