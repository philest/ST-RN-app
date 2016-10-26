import { createRouter } from '@exponent/ex-navigation';

import HomePage from './components/homePage';

import {
  View,
  Text
} from 'react-native'

export default Router = createRouter(() => ({
  home: () =>  HomePage,
}));
