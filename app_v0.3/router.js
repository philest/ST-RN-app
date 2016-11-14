import { createRouter } from '@exponent/ex-navigation';

import HomePage from './components/homePage';
import SplashPage from './components/splashPage'
import Reader from './components/readerPage'
import BookShelf from './components/homePage/BookShelfContainer'
import Messages  from './components/homePage/MessagesContainer'
import Test from './test'

import {
  View,
  Text
} from 'react-native'

export default Router = createRouter(() => ({
  home: () => HomePage,
  read: () => BookShelf,
  messages: () => Messages,
  splash: () => SplashPage,
  reader: () => Reader,
  test: () => Test
}));
