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

var COMPONENT_NAMES = ['Title', 'LeftButton', 'RightButton'];


const CENTER_PADDING = 10

export default class extends Component {
  constructor(props) {
    super(props)
    this._shouldHideNavBar = this._shouldHideNavBar.bind(this);
    this.state = {
      heightValue: new Animated.Value(
        this.props.hideNavBar ? 0 : this.props.openHeight  // do for animation-indication flair :)
      ),
    }
  }

  componentDidMount() {
    setImmediate(this._shouldHideNavBar);
  }

  componentDidUpdate() {
    setImmediate(this._shouldHideNavBar);
  }


  render() {
    var navBarStyle = {
        height: this.state.heightValue,
        overflow: 'hidden',
      };

    return (
      <Animated.View style={[styles.navBarContainer, navBarStyle, this.props.style]}>
        <View style={styles.innerContainer}>
          { this.props.children }
        </View>
      </Animated.View>
    );
  }

  _shouldHideNavBar() {
    Animated.timing(this.state.heightValue, {
      duration: 100,
      toValue: !this.props.hideNavBar ? this.props.openHeight : 0,
    }).start();
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
    backgroundColor:'rgba(0,0,0,0.8)',
    flex:1,
    alignItems:'center',
    paddingLeft: CENTER_PADDING
  }
})
