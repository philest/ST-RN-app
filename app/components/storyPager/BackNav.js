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

const TotalNavHeight = 60

export default class extends Component {
  constructor(props: any) {
    super(props);
    this._shouldHideNavBar = this._shouldHideNavBar.bind(this);
    this.state = {
      heightValue: new Animated.Value(
        this.props.hideNavBar ? TotalNavHeight : 0  // do for animation-indication flair :)
      ),
    }
  }

  componentDidMount() {
    setImmediate(this._shouldHideNavBar);
  }

  componentDidUpdate() {
    setImmediate(this._shouldHideNavBar);
  }


  render(): View {
    var navBarStyle = {
        height: this.state.heightValue,
        overflow: 'hidden',
      };

    return (
      <Animated.View
        style={[styles.navBarContainer, navBarStyle, this.props.style]}>
        <View style={{flexDirection: 'row', backgroundColor:'rgba(0,0,0,.75)', flex:1, alignItems:'center', paddingLeft: 10}}>

          <View>
          <TouchableOpacity onPress={this.props.onPress}>
            <View style={{width:TotalNavHeight, width:TotalNavHeight}}>
              <Icon name='ios-arrow-back' size={40} color='white'/>
            </View>

          </TouchableOpacity>
          </View>
        <Text style={{color:'white', fontSize:20, paddingLeft:20}}>
          { this.props.text }
        </Text>

        </View>
      </Animated.View>
    );
  }

  _shouldHideNavBar() {
    Animated.timing(this.state.heightValue, {
      duration: 100,
      toValue: !this.props.hideNavBar ? TotalNavHeight : 0,
    }).start();
  }
}

var styles = StyleSheet.create({
  navBarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
});
