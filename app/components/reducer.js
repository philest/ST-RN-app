import { combineReducers } from 'redux'
import bookShelfReducer 				from './bookShelf/state'
import readingSuggestionReducer from './readingSuggestion/state'
import storyPagerReducer 				from './storyPager/state'
import stBubblesReducer					from './st-bubbles/state'


export default reducer = combineReducers({
	bookShelf: bookShelfReducer,
	readingSuggestion: readingSuggestionReducer,
	storyPager: storyPagerReducer,
	stBubbles: stBubblesReducer
})
