export const ALLOW_PUSH = 'scenes/homePage/ALLOW_PUSH'
export const DISABLE_PUSH = 'scenes/homePage/DISABLE_PUSH'
export const allowPush = () => ({
  type: ALLOW_PUSH
})
export const disablePush = () => ({
  type: DISABLE_PUSH
})
const initialState = { pushesEnabled: true }

export default globalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ALLOW_PUSH:
      return { ...state, pushesEnabled: true }
    case DISABLE_PUSH:
      return { ...state, pushesEnabled: false }
    default: return state;
  }
}
