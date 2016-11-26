export const SET_HOMEPAGE_INDEX = 'scenes/homePage/SET_HOMEPAGE_INDEX'
export const SET_PAGER_REF = 'scenes/homePage/SET_PAGER_REF'


export const setHomePageIndex = (index) => ({
  type: SET_HOMEPAGE_INDEX,
  index
})

// the purpose of this action is to allow the static navbar to access
// the ViewPager, which is how we flip between the chat and library pages.
// obvs this is bit convoluted, but it is unfortunately how ex-navigation works
export const setPagerRef = (pagerRef) => ({
  type: SET_PAGER_REF,
  pagerRef
})

const initialState = { index: 1, pager: null }

export default reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_HOMEPAGE_INDEX:
      return {...state, index: action.index}
    case SET_PAGER_REF:
      return {...state, pagerRef: action.pagerRef}
    default: return state;
  }
}
