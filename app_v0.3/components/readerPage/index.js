import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native'
import { connect } from 'react-redux'

import ReaderModal from '../readerModal'

export default class ReaderContainer extends Component {
  static route = {
    navigationBar: {
      visible: false
    },
  }
  render () {
    return <ReaderModal />
  }
}
