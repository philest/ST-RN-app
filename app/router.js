import { createRouter } from '@exponent/ex-navigation';

import HomePage   from 'app/components/homePage';
import SplashPage from 'app/components/splashPage'
import Reader     from 'app/components/readerPage'
import BookShelf  from 'app/components/homePage/BookShelfContainer'
import Messages   from 'app/components/homePage/MessagesContainer'


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
