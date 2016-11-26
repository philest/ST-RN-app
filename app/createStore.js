// tab router
import { createNavigationEnabledStore, NavigationReducer } from '@exponent/ex-navigation';
import { combineReducers, createStore } from 'redux';
import { enableBatching }  from 'redux-batched-actions'

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
});

import bookShelf from 'app/components/bookShelf/BookShelfReducer'
import bookList from 'app/components/bookShelf/BookListReducer'
import { firebaseInfoReducer } from 'app/data/pushController'
import { devReducer } from 'app/components/devButtons'


import scenesReducer from 'app/scenes/reducer'


const rootReducer = combineReducers({
  scenes: scenesReducer,
  navigation: NavigationReducer,
  bookShelf,
  bookList,
  firebaseInfo: firebaseInfoReducer,
})

const store = createStoreWithNavigation(
  enableBatching(rootReducer)
)

export default store;
