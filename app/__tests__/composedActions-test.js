import { NavigationActions }    from 'StoryTime/node_modules/@exponent/ex-navigation'

import {
  itemUpdateLastTimeRead,
  itemMarkRead
}                               from 'app/data/user/bookList/bookListActions'

import { setCurrentStoryIndex } from 'app/components/bookShelf/state'
import { pushStorySplashPage } from 'app/composedActions'

describe('pushStorySplashPage', () => {
  it('creates a batch action for the splash page', () => {
    const batchedType = 'BATCHING_REDUCER.BATCH'
    const eg = pushStorySplashPage(1)
    expect(eg.type).toEqual(batchedType)
  })
})
