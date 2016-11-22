import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  UIManager
} from 'react-native';

import {GiftedChat} from 'react-native-gifted-chat'

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)


export default class STChat extends Component {

  constructor(props) {
     super(props)

     this.state = {
       messages: []
     }

     this.onSend = this.onSend.bind(this)
   }

   componentWillMount() {
     this.setState({
       messages: [
         {
           _id: 1,
           text: `Hey, there! This is Mrs. Stobierski! Read this book pls!`,
           createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
           user: {
             _id: 2,
             name: 'React Native',
             avatar: 'https://facebook.github.io/react/img/logo_og.png',
           },
         },
       ],
     })
   }

   onSend(messages = []) {
     this.setState((previousState) => {
       return {
         messages: GiftedChat.append(previousState.messages, messages),
       }
     })
   }

   render() {
     return (
       <GiftedChat
         // bottomOffset={BOTTOM_OFFSET}
         messages={this.state.messages}
         onSend={this.onSend}
         user={{
           _id: 1,
         }}
       />
     )
   }
}
