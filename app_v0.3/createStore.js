// tab router
import { createNavigationEnabledStore, NavigationReducer } from '@exponent/ex-navigation';
import { combineReducers, createStore } from 'redux';
import { enableBatching }  from 'redux-batched-actions'

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
});

import bookShelf from './components/bookShelf/BookShelfReducer'
import bookList from './components/bookShelf/BookListReducer'
import { firebaseInfoReducer } from './components/pushController'

const rootReducer = combineReducers({
  navigation: NavigationReducer,
  bookShelf,
  bookList,
  firebaseInfo: firebaseInfoReducer
})

const store = createStoreWithNavigation(
  enableBatching(rootReducer)
)

export default store;
