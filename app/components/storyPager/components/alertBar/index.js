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

import { connect } from 'react-redux'
import TopAlert from 'app/components/topAlert'

const BACK_BAR_HEIGHT = 60
const SUGGESTION_HEIGHT = 70

var COMPONENT_NAMES = ['Title', 'LeftButton', 'RightButton'];
const TEXT_PADDING = 15
const CENTER_PADDING = 10


export class PagerAlert extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hide:true,
      alertHeight: BACK_BAR_HEIGHT,
      displayBubbleInfo: false
    }

    this._renderAlertContent = this._renderAlertContent.bind(this)
  }


  componentWillReceiveProps(nextProps) {
    // TODO: lol simplyify this?
    const bubbleToNone   = (this.props.bubbleOpen && this.props.backBarHidden) && !nextProps.bubbleOpen
    const bubbleToBubble = this.props.bubbleOpen && nextProps.bubbleOpen
    const noneToBubble   =  !this.props.bubbleOpen && nextProps.bubbleOpen
    this.setState({
      hide: (nextProps.backBarHidden && !nextProps.bubbleOpen),
      alertHeight: nextProps.bubbleOpen ? SUGGESTION_HEIGHT : BACK_BAR_HEIGHT,
      displayBubbleInfo: bubbleToNone || bubbleToBubble || noneToBubble
    })
  }

  _renderAlertContent(bubbleOpen) {

    if (!bubbleOpen) {
      return <View style={styles.backWrap}>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onPress}>
          <View><Icon name='ios-arrow-back' size={30} color='white'/></View>
        </TouchableOpacity>
        <Text style={styles.titleText}> { this.props.titleText } </Text>
      </View>
    }

    return <View style={styles.suggestionContainer}>
      <Text style={styles.suggestionText}> { this.props.suggestedText } </Text>
    </View>

  }


  render() {
    return (
      <TopAlert openHeight={this.state.alertHeight} hideNavBar={this.state.hide}>
        { this._renderAlertContent(this.state.displayBubbleInfo) }
      </TopAlert>
    )
  }
}


const mapStateToProps = (state) => ({
  backBarHidden: !state.components.storyPager.backBarEnabled,
  bubbleOpen: state.components.readingSuggestion.open,
  currentBubble: state.components.stBubbles.selectedBubble,
  suggestedText: state.components.readingSuggestion.text,
})

export default connect(mapStateToProps)(PagerAlert)

const styles = StyleSheet.create({
  backWrap: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  buttonContainer: {
    height:BACK_BAR_HEIGHT,
    width:BACK_BAR_HEIGHT/2,
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
  },
  suggestionContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems:'center'
  },
  suggestionText: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    fontFamily:'Karla-Regular'
  }
});
