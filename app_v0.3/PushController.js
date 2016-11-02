import React, { Component } from 'react'

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
        console.log(notif);
        if(notif.local_notification){
          return;
        }
        if(notif.opened_from_tray){
          //app is open/resumed because user clicked banner
        }

        FCM.presentLocalNotification({
          id: notif.id,
          title: notif.title,
          body: notif.body,
          priority: "high",
          click_action: notif.click_action,
          show_in_foreground: true,
          local: true
        })

    });
    this.refreshUnsubscribe = FCM.on('refreshToken', (token) => {
        console.log(token)
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
