/* regular actions */
export const SET_CURRENT_INDEX = 'components/storyPager/SET_CURRENT_INDEX'
export const BACK_BAR_HIDE = 'components/storyPager/BACK_BAR_HIDE'
export const BACK_BAR_SHOW = 'components/storyPager/BACK_BAR_SHOW'


export const setCurrentIndex = (index) => ({
  type: SET_CURRENT_INDEX,
  index
})

export const showBackBar = () => ({
  type: BACK_BAR_SHOW,
})

export const hideBackBar = () => ({
  type: BACK_BAR_HIDE,
})

import { updateObject, updateItemInArray } from 'app/reducerUtils'

export default storyPagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_INDEX:
      return updateObject(state, {currentIndex: action.index})
    case BACK_BAR_SHOW:
      return updateObject(state, {backBarEnabled: true})
    case BACK_BAR_HIDE:
      return updateObject(state, {backBarEnabled: false})
    default:
      return state
  }
}

const initialState = {
  currentIndex: 0,
  backBarEnabled:false
}
