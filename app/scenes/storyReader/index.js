import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StatusBar
} from 'react-native'
import { connect } from 'react-redux'

import reactMixin from 'react-mixin'
import TimerMixin from 'react-timer-mixin';

import { NavigationActions } from '@exponent/ex-navigation'
import { NavigationStyles } from '@exponent/ex-navigation';

import ReaderModal from 'app/components/storyPager'

class ReaderContainer extends Component {
  static route = {
    styles: {
      ...NavigationStyles.Fade,
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
      1500
    )
  }

  render () {
    return <View>
      <ReaderModal backAction={()=>this.props.dispatch(NavigationActions.pop('root'))}/>
      <StatusBar hidden={this.state.statusBarHide} />
    </View>
  }
}

// the purpose of this timer is to ensure a smooth transition when hiding statusbar
reactMixin( ReaderContainer.prototype, TimerMixin )

export default connect()(ReaderContainer)
