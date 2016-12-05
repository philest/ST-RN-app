import React, { Component } from 'react'
import {
  Linking,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Image
} from 'react-native'

import STText from 'app/components/STText'

import { Time} from 'react-native-gifted-chat';
import Bubble from './WeirdBubble'

export default class CustomBubble extends Component {

  // renderAvatar(props) {
  //   const position = props.position
  //
  //   // TODO write a unit test for this behavior!!!!
  //   if (props.currentMessage.newStory || position=='right') {
  //     return null
  //   }
  //   const user = props.currentMessage.user
  //   return (
  //     <View style={{ flex:1, marginRight:20, flexDirection:'row', alignItems:'center'}}>
  //       <GiftedAvatar
  //         avatarStyle={[styles[position].image]}
  //         user={user}
  //       />
  //       <View>
  //         <STText style={{fontSize:18, color:'black'}}> {user.name} </STText>
  //       </View>
  //     </View>
  //   )
  // }


  render() {

    // styling for when messsage is a new story
    const currentColor = (newStory) => {
      if (!newStory) {
        return '#f0f0f0'
      }
      return '#FFFFFF'
    }


    return (
        <Bubble
          {...this.props}
          wrapperStyle={{
            left: {
              marginLeft: 40,
              marginRight: 20,
              // backgroundColor: currentColor(this.props.currentMessage.newStory),
            }
          }}
          textStyle={{
            fontSize:40
          }}
          // don't render time if the message is a new story
          // renderTime={(timeProps)=>!this.props.currentMessage.newStory ? <Time {...timeProps}/> : false}

          // jk, phil doesn't want the time at all
          renderTime={()=>false}
        />
    )

    return null
  }
}

const styles = {
  left: StyleSheet.create({
    container: {
      marginRight: 8,
    },
    image: {
      height: 36,
      width: 36,
      borderRadius: 18,
    },
  }),
  right: StyleSheet.create({
    container: {
      marginLeft: 8,
    },
    image: {
      height: 36,
      width: 36,
      borderRadius: 18,
    },
  }),
};
