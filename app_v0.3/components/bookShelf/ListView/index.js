import React, { Component } from 'react'
import {
  ListView, Text
} from 'react-native'

import ListItem from './ListItem'

export default class StoryList extends Component {
  constructor(props) {
    super(props);
    // this._renderRow = this._renderRow.bind(this)
    this.ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !==r2 })
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.books)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.ds.cloneWithRows(nextProps.books)
    })
  }

  _renderRow = (r,sid,rid) => (
    <ListItem
      index={parseInt(r.key)} //TODO no don't do this....
      customPress={this.props.onRowPress}
      title={r.title}
      imageSrc={r.thumbnail}
      timeFirstRead={r.timeFirstRead}
      dispatch={this.props.dispatch}
    />
  )

  render () {
    return (
      <ListView
        dataSource={ this.state.dataSource }
        onEndReachedThreshold={ 60 }
        renderRow={ this._renderRow }
      />
    )
  }
}
