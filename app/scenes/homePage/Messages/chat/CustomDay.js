import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native'

import moment from 'moment/min/moment-with-locales.min';

import STText from 'app/components/STTextRegular'

import { Day } from 'react-native-gifted-chat';

export default class CustomBubble extends Component {

  // TODO
  renderLastThursday () {
    return <STText style={styles.dateText}>Last Thursday</STText>
  }


  renderToday () {
    return <STText style={styles.todayText}> Today </STText>
  }

  renderYourStory () {
    return <Text style={styles.yourStory}> Your Story </Text>
  }

  render () {
    const isToday = this.props.isSameDay(this.props.currentMessage, {createdAt: new Date(Date.now())})
    if ( !this.props.isSameDay(this.props.currentMessage, this.props.previousMessage) ) {
      return (
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.line}/>
              { isToday ? this.renderToday() : this.renderLastThursday() }
            <View style={styles.line}/>
          </View>
            { isToday ? this.renderYourStory() : null }
        </View>
      )
    }
    return null
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center'
  },
  innerContainer: {
    flex:1,
    flexDirection:'row',
    marginTop:15,
    marginBottom:7,
    marginLeft:50,
    marginRight:50,
    alignItems:'center'
  },
  line: {
    flex:4,
    borderTopWidth:1,
    borderColor:'grey'
  },
  todayText: {
    flex:3,
    fontSize:14,
    textAlign:'center',
    color:'darkslategrey'
  },
  dateText: {
    flex:6,
    fontSize:14,
    textAlign:'center',
    color:'darkslategrey'
  },
  yourStory: {
    color:'black',
    marginBottom:15,
    fontWeight:'bold',
    fontSize:32,
    fontFamily:'Karla-Italic'
  }
})
