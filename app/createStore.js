// tab router
import { createNavigationEnabledStore, NavigationReducer } from '@exponent/ex-navigation';
import { combineReducers, createStore } from 'redux';
import { enableBatching }  from 'app/vendor/redux-batched-actions/lib'

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
});


import componentsReducer       from 'app/components/reducer'
import scenesReducer           from 'app/scenes/reducer'
import dataReducer             from 'app/data/reducer'
import globalReducer           from './reducer'
import { firebaseInfoReducer } from 'app/services/pushController'

const rootReducer = combineReducers({
  global: globalReducer,
  components: componentsReducer,
  scenes: scenesReducer,
  data: dataReducer,
  navigation: NavigationReducer,
  firebaseInfo: firebaseInfoReducer,
})

const store = createStoreWithNavigation(
  enableBatching(rootReducer)
)

export default store;
