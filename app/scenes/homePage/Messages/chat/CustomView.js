import React, { Component } from 'react'
import {
  Linking,
  MapView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text
} from 'react-native'

import store      from 'app/createStore'

import { bookListArray } from 'app/data/user/bookList/state'
import { pushStorySplashPage } from 'app/composedActions'

export default class CustomView extends Component {
  render() {
    const sindex = this.props.currentMessage.newStory

    if (sindex) {
      const s = bookListArray[sindex]
      const newStorySrc = {uri:`${s.awsKey}_spine`}
      return (
        <View style={{backgroundColor:'white'}}>
          <View style={{marginTop:12, marginBottom:15, alignItems:'center'}}>
            <View style={{transform:[{rotateZ:'-5deg'}]}}>
              <TouchableOpacity onPress={()=>store.dispatch(pushStorySplashPage(sindex))}>
              <Image resizeMode='contain' style={{width:200, height:200}} source={newStorySrc} />
              </TouchableOpacity>
            </View>
            <Text style={{color:'black', fontSize:20, left: 5, top:10}}> Tap to read! </Text>
          </View>
        </View>
      )
    }
    return null
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'white'
  },
  mapView: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
  },
});

CustomView.defaultProps = {
  currentMessage: {},
  containerStyle: {},
  mapViewStyle: {},
};

CustomView.propTypes = {
  currentMessage: React.PropTypes.object,
  containerStyle: View.propTypes.style,
  mapViewStyle: View.propTypes.style,
};
