import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import moment from 'moment';

import {Avatar, Bubble, Day} from 'react-native-gifted-chat';

import GiftedAvatar from 'react-native-gifted-chat/src/GiftedAvatar'

import STText from 'app/assets/font/STText'

export default class Message extends React.Component {

  isSameDay(currentMessage = {}, diffMessage = {}) {
    let diff = 0;
    if (diffMessage.createdAt && currentMessage.createdAt) {
      diff = Math.abs(moment(diffMessage.createdAt).startOf('day').diff(moment(currentMessage.createdAt).startOf('day'), 'days'));
    } else {
      diff = 1;
    }
    if (diff === 0) {
      return true;
    }
    return false;
  }

  isSameUser(currentMessage = {}, diffMessage = {}) {
    if (diffMessage.user && currentMessage.user) {
      if (diffMessage.user._id === currentMessage.user._id) {
        return true;
      }
    }
    return false;
  }

  renderDay() {
    if (this.props.currentMessage.createdAt) {
      const {containerStyle, ...other} = this.props;
      const dayProps = {
        ...other,
        isSameUser: this.isSameUser,
        isSameDay: this.isSameDay,
      };
      if (this.props.renderDay) {
        return this.props.renderDay(dayProps);
      }
      return <Day {...dayProps}/>;
    }
    return null;
  }

  renderBubble() {
    const {containerStyle, ...other} = this.props;

    const bubbleProps = {
      ...other,
      isSameUser: this.isSameUser,
      isSameDay: this.isSameDay,
    }

    if (this.props.renderBubble) {
      return this.props.renderBubble(this.props);
    }
  }

  renderAvatar() {
    if (this.props.user._id !== this.props.currentMessage.user._id) {
      const {containerStyle, ...other} = this.props;
      const avatarProps = {
        ...other,
        isSameUser: this.isSameUser,
        isSameDay: this.isSameDay,
      };

      return <Avatar {...avatarProps}/>;
    }
    return null;
  }

  poop(props) {
    const position = props.position

    // TODO write a unit test for this behavior!!!!
    if (props.currentMessage.newStory || position=='right') {
      return null
    }

    const user = props.currentMessage.user
    return (
      <View style={{ flex:1, marginRight:20, flexDirection:'row', alignItems:'center'}}>
        <GiftedAvatar
          avatarStyle={[styles[position].image]}
          user={user}
        />
        <View>
          <STText style={{fontSize:18, color:'black'}}> {user.name} </STText>
        </View>
      </View>
    )
  }


  render() {
    return (
      <View>
        {this.renderDay()}
        <View style={[styles[this.props.position].container, {
          marginBottom: this.isSameUser(this.props.currentMessage, this.props.nextMessage) ? 2 : 10,
        }, this.props.containerStyle[this.props.position]]}>
          <View style={{flexDirection:'column', flex:1}}>
            {this.poop(this.props)}
            {this.renderBubble()}
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  left: StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      marginLeft: 8,
      marginRight: 0,
    },
  }),
  right: StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      marginLeft: 0,
      marginRight: 8,
    },
  }),
};

Message.defaultProps = {
  renderAvatar: null,
  renderBubble: null,
  renderDay: null,
  position: 'left',
  currentMessage: {},
  nextMessage: {},
  previousMessage: {},
  user: {},
  containerStyle: {},
};

Message.propTypes = {
  renderAvatar: React.PropTypes.func,
  renderBubble: React.PropTypes.func,
  renderDay: React.PropTypes.func,
  position: React.PropTypes.oneOf(['left', 'right']),
  currentMessage: React.PropTypes.object,
  nextMessage: React.PropTypes.object,
  previousMessage: React.PropTypes.object,
  user: React.PropTypes.object,
  containerStyle: React.PropTypes.shape({
    left: View.propTypes.style,
    right: View.propTypes.style,
  }),
};
