/* regular actions */
export const SET_TEXT       = 'components/ReadingSuggestion/SET_TEXT'
export const OPEN_DRAWER    = 'components/ReadingSuggestion/OPEN_DRAWER'
export const CLOSE_DRAWER   = 'components/ReadingSuggestion/CLOSE_DRAWER'
export const ENABLE_DRAWER  = 'components/ReadingSuggestion/ENABLE_DRAWER'
export const DISABLE_DRAWER = 'components/ReadingSuggestion/DISABLE_DRAWER'

export const setText = (text) => ({
  type: SET_TEXT,
  text
})
export const openDrawer = () => ({
  type: OPEN_DRAWER,
})
export const closeDrawer = () => ({
  type: CLOSE_DRAWER,
})
export const enableDrawer = () => ({
  type: ENABLE_DRAWER,
})
export const disableDrawer = () => ({
  type: DISABLE_DRAWER,
})

import { updateObject, updateItemInArray } from 'app/reducerUtils'

export default readingSuggestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT:
      return updateObject(state, {text: action.text})
    case OPEN_DRAWER:
      return updateObject(state, {open: true})
    case CLOSE_DRAWER:
      return updateObject(state, {open: false})
    case ENABLE_DRAWER:
      return updateObject(state, {enabled: true})
    case DISABLE_DRAWER:
      return updateObject(state, {enabled: false, open:false}) // TODO: be more careful about this?
    default:
      return state
  }
}

const initialState = {
  text: "Oops, you shouldn't be able to see this :)",
  open: false,
  enabled: false
}
