import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

// actions
import { openDrawer, closeDrawer } from './state'
import { hideBackBarAndUnselectBubble } from 'app/composedActions'

// components
import Drawer from 'react-native-drawer'

export class UnconnectedReadingSuggestion extends Component {

  constructor (props) {
    super(props)
  }

  render ()  {
    return(
      <Drawer
        side='top'
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={
          <View style={styles.container}>
            <Text style={styles.txt}> {this.props.text} </Text>
          </View>
        }
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
        open={this.props.opened}
        onOpen={() => {
          this.props.dispatch(openDrawer())
        }}
        onClose={() => {
          this.props.dispatch(hideBackBarAndUnselectBubble())
        }}
        captureGestures={false}
        tweenDuration={100}
        panThreshold={0.1}
        disabled={this.props.disabled}
        openDrawerOffset={0.9}
        panOpenMask={0.05}
        panCloseMaks={1}
        acceptPan={false}
        negotiatePan
        acceptDoubleTap
      >
        { this.props.children }
      </Drawer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems:'center'
  },
  txt: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    fontFamily:'Karla-Regular'
  }
})


const mapStateToProps = (state) => ({
  text: state.components.readingSuggestion.text,
  disabled: !state.components.readingSuggestion.enabled,
  opened: state.components.readingSuggestion.open
})


export default connect(mapStateToProps)(UnconnectedReadingSuggestion)
