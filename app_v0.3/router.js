import { createRouter } from '@exponent/ex-navigation';

import Homes from './Homes'
import HomePage from './components/homePage';
import SplashPage from './components/splashPage'
import Reader from './components/reader'
import BookShelf from './components/homePage/BookShelfContainer'
import Messages  from './components/homePage/MessagesContainer'


import {
  View,
  Text
} from 'react-native'

export default Router = createRouter(() => ({
  home: () => HomePage,
  read: () => BookShelf,
  messages: () => Messages,
  splash: () => SplashPage,
  reader: () => Reader
}));
