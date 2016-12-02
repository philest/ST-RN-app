// vendor components
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import Drawer from 'react-native-drawer'

import { openDrawer, closeDrawer } from './state'

export class UnconnectedReadingSuggestion extends Component {

  constructor (props) {
    super(props)
    // TODO: someday dynamic stuff...
  }

  render ()  {
    return(
      <Drawer
        side='bottom'
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={
          <View style={styles.container}>
            <Text style={styles.txt}> {this.props.text} </Text>
          </View>
        }
        acceptDoubleTap
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
        open={this.props.opened}
        onOpen={() => {
          this.props.dispatch(openDrawer())
        }}
        onClose={() => {
          this.props.dispatch(closeDrawer())
          // TODO: also disable when have the buttons in
        }}
        captureGestures={false}
        tweenDuration={100}
        panThreshold={0.08}
        disabled={this.props.disabled}
        openDrawerOffset={0.9}
        panOpenMask={0.2}
        negotiatePan
      >
        { this.props.children }
      </Drawer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.95)'
  },
  txt: {
    fontSize: 20,
    color: 'white'
  }
})


const mapStateToProps = (state) => ({
  text: state.components.readingSuggestion.text,
  disabled: !state.components.readingSuggestion.enabled,
  opened: state.components.readingSuggestion.open
})


export default connect(mapStateToProps)(UnconnectedReadingSuggestion)
