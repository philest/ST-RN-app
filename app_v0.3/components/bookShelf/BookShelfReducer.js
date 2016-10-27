/* regular actions */
export const SET_GRID_VIEW   = 'SET_GRID_VIEW'
export const SET_LIST_VIEW   = 'SET_LIST_VIEW'

export const setGridView = () => ({
  type: SET_GRID_VIEW,
})

export const setListView = () => ({
  type: SET_LIST_VIEW,
})

import { updateObject, updateItemInArray } from '../../reducerUtils'

export default readerState = (state = initialState, action) => {
  switch (action.type) {
    case SET_GRID_VIEW:
      return updateObject(state, {bookShelfDisplayFormat: 'grid'})
    case SET_LIST_VIEW:
      return updateObject(state, {bookShelfDisplayFormat: 'list'})
    default:
      return state
  }
}

const initialState = {
  bookShelfDisplayFormat: 'grid'
}
