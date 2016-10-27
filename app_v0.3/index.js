// vendor components
import React,{ Component } from 'react'
import { View, StyleSheet }from 'react-native'
import { Provider }        from 'react-redux'

// components that we wrote
// import Library             from './components/libraryNav'
// import Reader              from './components/readerModal'

import Store from './createStore'
import Router from './router.js'

import {
  NavigationContext,
  NavigationProvider,
  StackNavigation,
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
            initialRoute={Router.getRoute('home')}
          />
        </NavigationProvider>
      </Provider>
    )
  }
}
