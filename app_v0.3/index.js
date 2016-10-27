// vendor components
import React,{ Component } from 'react'
import { View, StyleSheet }from 'react-native'
import { Provider }        from 'react-redux'


import Store from './createStore'
import Router from './router.js'
import Home from './components/homePage'

import {
  NavigationContext,
  NavigationProvider,
  StackNavigation,
  TabNavigation
} from '@exponent/ex-navigation';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
})


export default class App extends Component {
  render () {
    return (
      // <Login />
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation
            navigatorUID='root'
            initialRoute={Router.getRoute('home')}
            defaultRouteConfig={{
              navigationBar: {
                ...TabNavigation.navigationBarStyles,
              }
            }}
            />
          {/* <Home /> */}
        </NavigationProvider>
      </Provider>
    )
  }
}
