import { createRouter } from '@exponent/ex-navigation';

import Homes from './Homes'
import HomePage from './components/homePage';
import SplashPage from './components/splashPage'
import Reader from './components/reader'

import {
  View,
  Text
} from 'react-native'

export default Router = createRouter(() => ({
  home: () =>  HomePage,
  splash: () => SplashPage,
  reader: () => Reader
}));
