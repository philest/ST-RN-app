import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from 'react-native'



import { GiftedChat, Actions, Bubble, Avatar} from 'react-native-gifted-chat';
// import CustomActions from './CustomActions'
import CustomView from './CustomView'
import CustomBubble from './CustomBubble'
import CustomDay from './CustomDay'

const button = (text) => (
  <TouchableOpacity>
    <View><Text style={{fontSize:35}}> {text} </Text></View>
  </TouchableOpacity>
)


export default class Example extends React.Component {
  static route = {
    navigationBar: {
      title: 'Chat Screen Title',
      renderRight: () => button('right'),
      renderLeft: () => button('left')

    }
  }


  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
    }

    this._isMounted = false;
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this.renderCustomActions = this.renderCustomActions.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.onLoadEarlier = this.onLoadEarlier.bind(this);
    this._isAlright = null;
  }

  componentWillMount() {
    this._isMounted = true;
    this.setState(() => {
      return {
        messages: require('./data/messages.js'),
      }
    })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onLoadEarlier() {
    this.setState((previousState) => {
      return {
        isLoadingEarlier: true,
      }
    })

    setTimeout(() => {
      if (this._isMounted === true) {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.prepend(previousState.messages, require('./data/old_messages.js')),
            loadEarlier: false,
            isLoadingEarlier: false,
          }
        })
      }
    }, 1000); // simulating network
  }

  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      }
    })

    // for demo purpose
    this.answerDemo(messages);
  }

  answerDemo(messages) {
    if (messages.length > 0) {
      if ((messages[0].image || messages[0].location) || !this._isAlright) {
        this.setState((previousState) => {
          return {
            typingText: 'React Native is typing'
          }
        })
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {
          if (messages[0].image) {
            this.onReceive('Nice picture!');
          } else if (messages[0].location) {
            this.onReceive('My favorite place');
          } else {
            if (!this._isAlright) {
              this._isAlright = true;
              this.onReceive('Alright');
            }
          }
        }
      }

      this.setState((previousState) => {
        return {
          typingText: null,
        }
      })
    }, 1000)
  }

  onReceive(text) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            // avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        }),
      }
    })
  }

  renderCustomActions(props) {

    const options = {
      'Get New Story': (props) => {

      },
      'Reset': (props) => {

      },
      'Cancel': () => {},
    }
    return (
      <Actions
        {...props}
        options={options}
      />
    )
  }

  renderBubble(props) {

    return (
      <CustomBubble
        {...props}
      />
    )
  }

  renderCustomView(props) {
    return (
      <CustomView
        {...props}
      />
    )
  }

  renderDay (props) {
    return (
      <CustomDay
        {...props}
      />
    )
  }

  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {this.state.typingText}
          </Text>
        </View>
      )
    }
    return null;
  }

  renderAvatar(props) {
    if (props.currentMessage.newStory) {
      return null
    }
    return <Avatar {...props} />
  }

  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar />
        <GiftedChat

        messages={this.state.messages}
        onSend={this.onSend}
        loadEarlier={this.state.loadEarlier}
        onLoadEarlier={this.onLoadEarlier}
        isLoadingEarlier={this.state.isLoadingEarlier}
        user={{
          _id: 1, // sent messages should have same user._id
        }}
        renderActions={this.renderCustomActions}
        renderBubble={this.renderBubble}
        renderCustomView={this.renderCustomView}
        renderFooter={this.renderFooter}
        renderAvatar={this.renderAvatar}
        renderDay={this.renderDay}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
});
