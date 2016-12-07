/* regular actions */
export const SET_SELECTED_BUBBLE       = 'components/st-bubble/SET_SELECTED_BUBBLE'

export const setSelectedBubble = (bubble_ref) => ({
  type: SET_SELECTED_BUBBLE,
  bubble_ref
})


import { updateObject, updateItemInArray } from 'app/reducerUtils'

export default stBubblesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_BUBBLE:
      return updateObject(state, {selectedBubble: action.bubble_ref})
    default:
      return state
  }
}

const initialState = {
  selectedBubble: null,
}
