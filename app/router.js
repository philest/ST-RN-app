import { createRouter } from '@exponent/ex-navigation';

import HomePage   from 'app/scenes/homePage';
import StorySplashPage from 'app/scenes/storySplashPage'
import StoryReader     from 'app/scenes/storyReader'

import {
  View,
  Text
} from 'react-native'

export default Router = createRouter(() => ({
  home: () => HomePage,
  storySplashPage: () => StorySplashPage,
  storyReader: () => StoryReader
}));
