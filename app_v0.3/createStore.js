// tab router
import { createNavigationEnabledStore, NavigationReducer } from '@exponent/ex-navigation';
import { combineReducers, createStore } from 'redux';

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
});




import libraryList from './components/bookShelf/BookShelfReducer'
import readerState from './components/reader/ReaderReducer'
const store = createStoreWithNavigation(
  /* combineReducers and your normal create store things here! */
  combineReducers({
    navigation: NavigationReducer,
    libraryList,
    readerState
  }),
);

export default store;
