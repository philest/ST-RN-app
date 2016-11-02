// vendor components
import React,{ Component } from 'react'
import { View, StyleSheet, StatusBar }from 'react-native'
import { Provider }        from 'react-redux'
import FCM from 'react-native-fcm'

import Store from './createStore'
import Router from './router.js'
import Home from './components/homePage'

import {
  NavigationContext,
  NavigationProvider,
  StackNavigation,
  SlidingTabNavigation
} from '@exponent/ex-navigation';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
})


export default class App extends Component {

  componentDidMount() {
    FCM.getFCMToken().then(token => {
        FCM.subscribeToTopic('/topics/demo')
        console.log(token)
        // store fcm token in your server
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
        })

    });
    this.refreshUnsubscribe = FCM.on('refreshToken', (token) => {
        console.log(token)
        // fcm token may not be available on first load, catch it here
    });
  }

  componentWillUnmount() {
      // prevent leaking
      this.refreshUnsubscribe();
      this.notificationUnsubscribe();
  }

  render () {
    return (
      // <Login />
      <Provider store={Store}>

        <NavigationProvider context={navigationContext}>

          <StatusBar hidden={true} />
          <StackNavigation
            navigatorUID='root'
            initialRoute={Router.getRoute('home')}
            defaultRouteConfig={{
              navigationBar: {
                ...SlidingTabNavigation.navigationBarStyles,
              }
            }}
            />
        </NavigationProvider>
      </Provider>
    )
  }
}
