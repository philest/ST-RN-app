import { connect } from 'react-redux'
import PushController from './PushController'
import { updateObject } from '../../reducerUtils'

export const UPDATE_FCM_TOKEN = 'UPDATE_FCM_TOKEN'

export const updateFCMToken = (token) => ({
  type: UPDATE_FCM_TOKEN,
  time: Date.now(),
  token,
})

export const firebaseInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FCM_TOKEN:
      if (action.token != state.fcmToken) {
          return updateObject(state, {fcmToken: action.token})
      }
      return state
    default:
      return state
  } // END switch
} // END const bookList

const initialState = {
  fcmToken: ''
}

const mapStateToProps = (state) => ({
  // currently selected book
  fcmToken: state.firebaseInfo.fcmToken,
  state
})

const mapDispatchToProps = (dispatch) => ({
  onChangeToken (token) {
    dispatch(updateFCMToken(token))
  },
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(PushController)
