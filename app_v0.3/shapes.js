import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

/* adapted from the techniques observed here: http://browniefed.com/blog/the-shapes-of-react-native/ */

// export class Parallelogram extends Component {
//   render() {
//
//     const baseWidth  = this.props.width
//     const baseLength = this.props.height
//
//
//
//
//     return (
//       <View style={styles.parallelogram}>
//         <TriangleUp style={styles.parallelogramRight} />
//         <View style={styles.parallelogramInner} />
//         <TriangleDown style={styles.parallelogramLeft} />
//       </View>
//     )
//   }
// }
//
// const
//
//
// }


// export const TriangleUp = ({style}) => (
//   <View style={[styles.triangleUp, style]} />
// )
//
// export const TriangleRight = ({style}) => (
//   <TriangleUp style={[styles.triangleRight, style]} />
// )
//
// export const TriangleLeft = ({style}) => (
//   <TriangleUp style={[styles.triangleLeft, style]} />
// )
//
// export const TriangleDown = ({style}) => (
//   <TriangleUp style={[styles.triangleDown, style]} />
// )


// export const TriangleDown = ({style}) => (
//   <View style={[styles.triangleDown, style]} />
// )


export const TriangleUp = ({style, sides, bottom, color}) => (
  <View
    style={[
      styles.triangleUp,
      {
        borderLeftWidth: sides||50,
        borderRightWidth: sides||50,
        borderBottomWidth: bottom||100,
        borderBottomColor: (color||'red')
      },
      style,
    ]}
  />
)

export const TriangleRight = ({style, sides, bottom, color}) => (
  <TriangleUp
    color={color}
    style={[styles.triangleRight, style]}
    sides={sides}
    bottom={bottom}
  />
)

export const TriangleLeft = ({style, sides, bottom, color}) => (
  <TriangleUp
    color={color}
    style={[styles.triangleLeft, style]}
    sides={sides}
    bottom={bottom}
  />
)

export const TriangleDown = ({style, sides, bottom, color}) => (
  <View
    style={[
      styles.triangleDown,
      {
        borderLeftWidth: sides||50,
        borderRightWidth: sides||50,
        borderTopWidth: bottom||100,
        borderTopColor: (color||'red')
      },
      style,
    ]}
  />
)

const styles = StyleSheet.create({
  triangleUp: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent'
  },
  triangleDown: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent'
  },
  triangleRight: {
    transform: [{rotate:'90deg'}]
  },
  triangleLeft: {
    transform: [{rotate:'270deg'}]
  },
  triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 100,
    borderTopWidth: 100,
    borderRightColor: 'transparent',
    borderTopColor: 'red'
  },
  triangleCornerTopRight: {
    transform: [
      { rotate: '90deg' }
    ]
  },
  triangleCornerBottomRight: {
    transform: [
      { rotate: '180deg' }
    ]
  },
  triangleCornerBottomLeft: {
    transform: [
      { rotate: '270deg' }
    ]
  }
})




export const Parallelogram = ({style, width, height, color}) => (
  <View style={{flexDirection:'column', height:height, width:width}}>
    <TriangleLeft style={[{top:0, position:'absolute'}]} sides={width/2} bottom={width} color={color}/>
    <View style={[{backgroundColor:(color||'red'), marginTop:width/2, height:height, width:width}]}/>
    <TriangleRight style={[{bottom:-width, position:'absolute'}]} sides={width/2} bottom={width} color={color}/>
  </View>
)

export const ParallelogramHoriz = ({style, width, height, color}) => (
  <View style={[{flexDirection:'row', height:height, width:width}, style]}>
    <TriangleUp style={[{left:0, position:'absolute'}]} sides={height/2} bottom={height} color={color}/>
    <View style={{backgroundColor:(color||'red'), marginLeft:height/2, height:height, width:width}}/>
    <TriangleDown style={{right:-height, position:'absolute'}} sides={height/2} bottom={height}/>
  </View>
)


const pStyle = StyleSheet.create({
  parallelogram: {
    width: 150,
    height: 100
  },
  parallelogramInner: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'red',
    width: 150,
    height: 100,
  },
  parallelogramRight: {
    top: 0,
    right: -50,
    position: 'absolute'
  },
  parallelogramLeft: {
    top: 0,
    left: -50,
    position: 'absolute'
  }
})



//
// TriangleCornerBottomRight = ({style}) =>
//       <TriangleCorner style={styles.triangleCornerBottomRight}/>
//     )
//   }
// })
