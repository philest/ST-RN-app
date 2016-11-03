// vendor components
import React,{ Component } from 'react'
import { View, StyleSheet, StatusBar }from 'react-native'
import { Provider }        from 'react-redux'

// connect to firebase!
import * as Firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDQkgcxSMXHlGbTcZY7KkTGLZhekvTcyHY",
  authDomain: "storytime-e2537.firebaseapp.com",
  databaseURL: "https://storytime-e2537.firebaseio.com"
}
Firebase.initializeApp(firebaseConfig);


// turn regular ol' redux store into a navigator-aware store
import { NavigationContext } from '@exponent/ex-navigation'
import Store from './createStore'
import Router from './router.js'

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
})


// import our lovely components
import PushController from './components/pushController'
import {
  NavigationProvider,
  StackNavigation,
  SlidingTabNavigation
} from '@exponent/ex-navigation'


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
          <PushController />
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
