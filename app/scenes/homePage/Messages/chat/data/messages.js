import React from 'react'
import {Image} from 'react-native'
const styles = {
  avatarStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    borderRadius: 18,
  }
}

module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: '',
    newStory: {
      title: 'The Magic Seed',
      titleImage: require('../title.jpg')
    },
    createdAt: new Date(Date.now()),
    user: {
      _id: 0,
      name: 'StoryTime',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Hi again! Here is tonight\'s story! :)',
    createdAt: new Date(Date.now()),
    user: {
      _id: 2,
      name: 'Ms. Stobierski',
      avatar: () => <Image source={require('./harlene.png')} style={styles.avatarStyle}/>
    },
  },

];
