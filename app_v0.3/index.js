// vendor components
import React,{ Component } from 'react'
import { View, StyleSheet, StatusBar, Dimensions, Keyboard, LayoutAnimation }from 'react-native'
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


const MAGIC_NUMBER = 2 // lol. RN 0.27 with ex-navigation 2.0.0

export default class App extends Component {

  constructor(props) {
    super(props);
    // TODO: unload this onto the store...
    this._keyboardWillShow = this._keyboardWillShow.bind(this)
    this._keyboardWillHide = this._keyboardWillHide.bind(this)
    this.state = {
      token: "",
      visibleHeight: Dimensions.get('window').height,
      pad: 0
    }
  }

  componentWillMount () {
    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardWillShow);
    this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this._keyboardWillHide);
  }

  componentWillUnmount () {
    this.keyboardWillShowListener.remove();
    this.keyboardWillHideListener.remove();
  }

  _keyboardWillShow (e) {
   // Animation types easeInEaseOut/linear/spring

    let visibleHeight = Dimensions.get('window').height - e.endCoordinates.height
    this.setState({
      visibleHeight: visibleHeight,
      pad: e.endCoordinates.height - MAGIC_NUMBER
    })
  }

  _keyboardWillHide (e) {
    // Animation types easeInEaseOut/linear/spring

    this.setState({
      visibleHeight: Dimensions.get('window').height,
      pad: 0
    })
  }


  render () {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StatusBar hidden={true} />
          <PushController />
            <View style={{flex:1, height:this.state.visibleHeight, paddingTop:this.state.pad}}>
              <StackNavigation
                navigatorUID='root'
                initialRoute={Router.getRoute('test')}
                defaultRouteConfig={{
                  navigationBar: {
                    backgroundColor: '#fff'
                  }
                }}
              />
            </View>
        </NavigationProvider>
      </Provider>
    )
  }
}
