// completely not my work. just downloaded the source so I can modify it for my
// own devious needs. source:
//    https://github.com/lucholaf/react-native-grid-view/blob/master/index.js

'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  View,
  StyleSheet,
  ListView,
} from 'react-native';

import BookShelfVisual from './BookShelfVisual'

export default class CollectionView extends Component {
    constructor(props) {
      super(props)
      this.renderGroup = this.renderGroup.bind(this)
    }

    groupItems (items, itemsPerRow) {
        var itemsGroups = [];
        var group = [];
        items.forEach((item) => {
          if (group.length === itemsPerRow) {
            itemsGroups.push(group);
            group = [item];
          } else {
            group.push(item);
          }
        })

        if (group.length > 0) {
          itemsGroups.push(group);
        }

        return itemsGroups;
    }

    renderShelfVisual(items, itemsPerRow) {
      if (items.length == itemsPerRow && !items[0].dummy) {
        return <BookShelfVisual width={300} />
      }
      return null
    }


    renderGroup(group) {

      const itemsPerRow = this.props.itemsPerRow

      const items = group.map((item, index) => {
        return this.props.renderItem(item, index)
      })
      return (
        <View style={styles.group}>
          <View style={{flexDirection:'row', flex:1,}}>
            {items}
            { this.renderShelfVisual(group, itemsPerRow) }
          </View>
        </View>
      )
      return <View />
    }

    render() {
        var groups = this.groupItems(this.props.items, this.props.itemsPerRow)
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        return (<ListView
          {...this.props}
          renderRow={this.renderGroup}
          dataSource={ds.cloneWithRows(groups)}
        />)
    }
};


const styles = StyleSheet.create({
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
