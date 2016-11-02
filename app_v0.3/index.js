// vendor components
import React,{ Component } from 'react'
import { View, StyleSheet, StatusBar }from 'react-native'
import { Provider }        from 'react-redux'
import FCM from 'react-native-fcm'



import {
  NavigationContext,
  NavigationProvider,
  StackNavigation,
  SlidingTabNavigation
} from '@exponent/ex-navigation';


// connect to firebase!
import * as Firebase from 'firebase';
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDQkgcxSMXHlGbTcZY7KkTGLZhekvTcyHY",
  authDomain: "storytime-e2537.firebaseapp.com",
  databaseURL: "https://storytime-e2537.firebaseio.com"
};
Firebase.initializeApp(firebaseConfig);

import PushController from './PushController'


// turn regular ol' redux store into a navigator-aware store
import Store from './createStore'
import Router from './router.js'

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
})

export default class App extends Component {
  constructor(props) {
    super(props);
    // TODO: unload this onto the store...
    this.state = {
      token: ""
    }
  }
  render () {
    return (
      // <Login />
      <Provider store={Store}>

        <NavigationProvider context={navigationContext}>

          <StatusBar hidden={true} />
          <PushController
            onChangeToken={token => this.setState({token: token || ""})}
          />
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
