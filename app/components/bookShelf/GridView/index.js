import React, { Component } from 'react'
import {
  StyleSheet, View, Dimensions
} from 'react-native'

import GridView from './components/GridView'
import GridItem from './components/GridItem'

const { width, height } = Dimensions.get('window')

export default STGridView = ({items, itemsPerRow, onPress}) => (
  <GridView
    items={ items }
    itemsPerRow={itemsPerRow}
    style={styles.gridView}
    renderItem={
      (r, rid) => {
        // if the item is not a dummy, we actually render stuff
        if (!r.dummy) {
          return (
            <GridItem
              numItems={items.length}
              key={rid}
              index={parseInt(r.key)} //TODO no... don't do this....
              // TODO:
              //customPress={ () => this.props.baseNavPush({title:'Details', index:1}) } // TODO: move this behavior to the container...
              title={r.title}
              // imageSrc={'../../../assets/img/spines/bird_spine.png'}
              imageSrc={{uri:`${r.awsKey}_spine`}}
              timeFirstRead={r.timeFirstRead}
              rowItemWidth={(width-(2*murrginz))/itemsPerRow}
              onPress={onPress}
            />
          )
        }
        // render a dummy
        else return ( <View key={rid} style={{ width:(width-(2*murrginz))/itemsPerRow, height: 20}}/> )
      }
    }
  />
)


const murrginz = 10

const styles = StyleSheet.create({
  gridView: {
    paddingTop: murrginz,
    marginRight:  murrginz,
    marginLeft:   murrginz,
    minWidth: width-(murrginz*2),
    backgroundColor: '#F5FCFF',
  },
  dummy:{}
});
