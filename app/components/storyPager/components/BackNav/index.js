import React, { Component } from 'react'
import  {
  Navigator,
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
/* based on the solution found here for custom navbar:
https://github.com/exponentjs/ex-navigator/issues/6#issuecomment-186581820 */
// TODO: implement own version of this




const TotalNavHeight = 60

var COMPONENT_NAMES = ['Title', 'LeftButton', 'RightButton'];
const TEXT_PADDING = 15
const CENTER_PADDING = 10

export default class extends Component {

  render() {

    return (
      <TopAlert {...this.props}>
        <View style={styles.innerContainer}>
          <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onPress}>
            <View >
              <Icon name='ios-arrow-back' size={30} color='white'/>
            </View>
          </TouchableOpacity>
          <Text style={styles.titleText}> { this.props.text } </Text>
        </View>
      </TopAlert>
    )
  }

}

const styles = StyleSheet.create({
  navBarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor:'rgba(0,0,0,.8)',
    flex:1,
    alignItems:'center',
    paddingLeft: CENTER_PADDING
  },
  buttonContainer: {
    height:TotalNavHeight,
    width:TotalNavHeight/2,
    paddingTop:TEXT_PADDING+8,
  },
  titleText: {
    flex:1,
    color:'white',
    fontSize:30,
    fontFamily: "Karla-Regular",
    textAlign:'center',
    paddingRight: CENTER_PADDING+5,
    paddingTop:TEXT_PADDING-3,
  }
});
