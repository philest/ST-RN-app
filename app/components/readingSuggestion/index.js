// vendor components
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

export class UnconnectedReadingSuggestion extends Component {

  constructor (props) {
    super(props)
    // TODO: someday dynamic stuff...
  }

  render ()  {
    return(
      <View style={styles.container}>
        <Text style={styles.txt}> {this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  txt: {
    fontSize: 20,
    color: 'white'
  }
})


const mapStateToProps = (state) => ({
  text: state.readdingSuggestionText,
})


export default connect()(UnconnectedReadingSuggestion)
