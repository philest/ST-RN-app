import React, { Component } from 'react'
import {
  StyleSheet, View, Dimensions
} from 'react-native'

import GridView from './components/GridView'
import GridItem from './components/GridItem'

const { width, height } = Dimensions.get('window')

export default STGridView = ({items, itemsPerRow, customPress}) => (
  <GridView
    items={ items }
    itemsPerRow={itemsPerRow}
    style={styles.gridView}
    renderItem={
      // i'm pretty sure that GridView only passes in the row object and the index, no section id
      (r, rid) => {
        // if the item is not a dummy, we actually render stuff
        if (!r.dummy) {
          return (
            <GridItem
              key={rid}
              index={parseInt(r.key)} //TODO no... don't do this....
              // TODO:
              //customPress={ () => this.props.baseNavPush({title:'Details', index:1}) } // TODO: move this behavior to the container...
              title={r.title}
              // imageSrc={'../../../assets/img/spines/bird_spine.png'}
              imageSrc={{uri:`${r.awsKey}_spine`}}
              timeFirstRead={r.timeFirstRead}
              rowItemWidth={(width-(2*murrginz))/itemsPerRow}
              customPress={customPress}
            />
          )
        }
        // render a dummy
        else return ( <View key={rid} style={styles.dummy}/> )
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
  dummy: {
    width:(width-(2*murrginz))/3,
    height: 20,
    // backgroundColor:'red'
  }
});
