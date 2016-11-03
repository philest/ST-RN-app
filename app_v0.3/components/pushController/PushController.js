import React, { Component } from 'react'

import handleNotification from './notificationHandler'

import FCM from 'react-native-fcm'

export default class FirebaseClient extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    FCM.requestPermissions(); // for IOS

    FCM.getFCMToken().then(token => {
        this.props.onChangeToken(token);
        FCM.subscribeToTopic('/topics/demo')
        console.log(token)
        // store fcm token in your server
    });

    FCM.getInitialNotification().then(notif => {
      console.log("INITIAL NOTIFICATION", notif)
    });

    this.notificationUnsubscribe = FCM.on('notification', (notif) => {



        // there are two parts of notif. notif.notification contains the notification payload, notif.data contains data payload
        if(notif.opened_from_tray){
          console.log('we opened the tray!!!!')
          handleNotification(this.props.dispatch, this.props.state, notif)
        }

        if(notif.local_notification){
          return
        }

        FCM.presentLocalNotification({
          id: notif.id,
          title: notif.title,
          body: notif.body,
          priority: "high",
          click_action: notif.click_action,
          show_in_foreground: true,
          story_time_action: notif.story_time_action,
          ...notif
        })

        console.log(notif)

    });

    // TODO: how does this actually work???
    this.refreshUnsubscribe = FCM.on('refreshToken', (token) => {
        console.log('TOKEN CHANGED IN REFRESH??');
        console.log(token)
        this.props.onChangeToken(token);
        // fcm token may not be available on first load, catch it here
    });
  }

  componentWillUnmount() {
      // prevent leaking
      this.refreshUnsubscribe()
      this.notificationUnsubscribe()
  }

  render() {
    return null
  }
}
