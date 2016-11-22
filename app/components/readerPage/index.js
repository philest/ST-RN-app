import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StatusBar
} from 'react-native'
import { connect } from 'react-redux'

import { NavigationStyles } from '@exponent/ex-navigation';

import ReaderModal from '../readerModal'

import reactMixin from 'react-mixin'
import TimerMixin from 'react-timer-mixin';

import { NavigationActions } from '@exponent/ex-navigation'

class ReaderContainer extends Component {
  static route = {
    styles: {
      ...NavigationStyles.SlideHorizontal,
    },
    navigationBar: {
      visible: false
    },
  }

  constructor (props) {
    super(props)
    this.state = {
      statusBarHide: false
    }
  }

  componentDidMount () {
    this.setTimeout(
      () => this.setState({ statusBarHide: true }),
      500
    )
  }

  render () {
    return <View>
      <ReaderModal backAction={()=>this.props.dispatch(NavigationActions.pop('root'))}/>
      {/* <StatusBar hidden={this.state.statusBarHide} /> */}
    </View>

  }
}

reactMixin(ReaderContainer.prototype, TimerMixin)

export default connect()(ReaderContainer)
