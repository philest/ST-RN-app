/* regular actions */
export const SET_CURRENT_INDEX = 'components/storyPager/SET_CURRENT_INDEX'

export const setCurrentIndex = (index) => ({
  type: SET_CURRENT_INDEX,
  index
})

import { updateObject, updateItemInArray } from 'app/reducerUtils'

export default storyPagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_INDEX:
      return updateObject(state, {currentIndex: action.index})
    default:
      return state
  }
}

const initialState = {
  currentIndex: 0,
}
