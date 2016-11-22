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


const NAVBAR_HEIGHT = 85
const MAGIC_NUMBER  = 2
export default class App extends Component {

  constructor(props) {
    super(props);
    // TODO: unload this onto the store...
    this._keyboardDidShow = this._keyboardDidShow.bind(this)
    this._keyboardDidHide = this._keyboardDidHide.bind(this)
    this.state = {
      token: "",
      visibleHeight: Dimensions.get('window').height,
      pad: 0
    }
  }

  componentWillMount () {

    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();

  }

  _keyboardDidShow (e) {
   // Animation types easeInEaseOut/linear/spring
    const config = LayoutAnimation.create(50, LayoutAnimation.Types.easeOut, LayoutAnimation.Properties.opacity)
    LayoutAnimation.configureNext(config)
    let visibleHeight = Dimensions.get('window').height - e.endCoordinates.height
    this.setState({
      visibleHeight: visibleHeight,
      pad: e.endCoordinates.height - MAGIC_NUMBER
    })
  }

  _keyboardDidHide (e) {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Dimensions.get('window').height,
      pad: 0
    })
  }

  // this may be handy some day: https://github.com/exponentjs/ex-navigation/issues/73

  render () {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StatusBar hidden={false} />
          <PushController />
            <View style={{flex:1, maxHeight:this.state.visibleHeight}}>
              <StackNavigation
                navigatorUID='root'
                initialRoute={Router.getRoute('messages')}
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
