import Router from 'app/router'
import { batchActions }         from 'redux-batched-actions'
import { NavigationActions }    from '@exponent/ex-navigation'

import {
  itemUpdateLastTimeRead,
  itemMarkRead
} from 'app/data/user/bookList/bookListActions'

import {
  setCurrentStoryIndex
} from 'app/components/bookShelf/state'

import {
  openDrawer,
  setText
} from 'app/components/readingSuggestion/state'

import {
  hideBackBar,
  showBackBar
} from 'app/components/storyPager/state'

import {
  setSelectedBubble
} from 'app/components/st-bubbles/state'

export const hideBackBarAndUnselectBubble = () => {
  return batchActions([
    hideBackBar(),
    setSelectedBubble(null)
  ])
}






export const setTextAndOpenDrawer = (text) => {
  return batchActions([
    setText(text),
    openDrawer(),
  ])
}


// TODO: if the date is revealed in a way that's not the same order as the booklist,
// the story correspondence will be wrong... fix some day.
export const pushStorySplashPage = (storyIndex) => {
  return batchActions([
    setCurrentStoryIndex(storyIndex),
    itemMarkRead(storyIndex), //TODO: change this api...
    NavigationActions.push('root', Router.getRoute('storySplashPage'))
  ])
}

export default poop = () => {

  alert('you imported the wrong thing, bub')
  return 'WRONG THING'
}
