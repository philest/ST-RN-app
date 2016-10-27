import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native'
import { connect } from 'react-redux'

const SplashStandin = ({}) => (
  <View style={{flex:1}}>
    <Text>Poop</Text>
  </View>
)


class SplashPage extends Component {
  static route = {
    navigationBar: {
      title: 'Splersh',
    }
  }

  render () {
    return(
      <View>
        <Text> {this.props.book.title}</Text>
      </View>
    )

  }
}



const mapStateToProps = (state) => ({
  // currently selected book
  book: state.bookList[state.bookShelf.currentStoryIndex]
})

export default connect(mapStateToProps)(SplashPage)
