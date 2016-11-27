import { batchActions } from 'redux-batched-actions'

import { itemReveal, itemMarkRead } from 'app/data/user/bookList/bookListActions'
import { setCurrentStoryIndex } from 'app/components/bookShelf/state'
import { NavigationActions } from '@exponent/ex-navigation'

import Router                from 'app/router'


export const NEW_BOOK = 'NEW_BOOK'
export const RESET    = 'RESET'


const shouldUpdateBooks = (bookList, timeSent) => {
  var i = 0;
  for (var b of bookList) {
    if (b.timeRevealedAt >= timeSent)
      return {shouldUpdate:false, storyIndex: i}
    else if (!b.timeRevealedAt)
      break;
    i++
  }
  return { shouldUpdate:true, storyIndex: i }
}


// TODO: convert these all into sagas, that way we can monitor success!
export default  handleNotification = (dispatch, store, n) => {
  switch (n.story_time_action) {
    case NEW_BOOK:
      // const shouldUpdate =1
      const {shouldUpdate, storyIndex} = shouldUpdateBooks(store.bookList, n.timeSent)

      if (shouldUpdate) {
        dispatch(itemReveal())
      }

      // if notification opened from tray, go directly to the book!
      if (n.opened_from_tray) {
        dispatch(batchActions([
          itemMarkRead(storyIndex), //TODO: change this api...
          NavigationActions.popToTop('root'),
          NavigationActions.popToTop('home'),
          setCurrentStoryIndex(storyIndex),
          NavigationActions.push('root', Router.getRoute('splash'))
        ]))
      }
      return
    case RESET:
      alert('reset')
      return
    default:
      alert('you got a notification!')
    }

}
