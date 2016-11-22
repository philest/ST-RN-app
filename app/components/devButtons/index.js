import React from 'react'
import { StyleSheet }  from 'react-native'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { itemReveal, resetLibrary } from '../bookShelf/BookListActions'

const CoolButtons = ({dispatch, active}) => (
  <ActionButton  active={active} buttonColor="rgba(231,76,60,1)" position="left"  spacing={5} offsetY={-80} offsetX={10}>
    <ActionButton.Item buttonColor='#9b59b6' title="Get new story" onPress={() => dispatch(itemReveal())}>
      <Icon name="md-add-circle" style={styles.actionButtonIcon} />
    </ActionButton.Item>
    <ActionButton.Item buttonColor='#3498db' title="Reset" onPress={() => dispatch(resetLibrary())}>
      <Icon name="md-git-pull-request" style={styles.actionButtonIcon} />
    </ActionButton.Item>
    {/* <ActionButton.Item buttonColor='#000000' title="Push" onPress={() => dispatch(push({key:'splish', rand: Date.now()}))}>
      <Icon name="md-git-commit" style={styles.actionButtonIcon} />
    </ActionButton.Item>
    <ActionButton.Item buttonColor='#000000' title="Pop" onPress={() => dispatch(pop())}>
      <Icon name="md-git-merge" style={styles.actionButtonIcon} />
    </ActionButton.Item> */}
  </ActionButton>
)


export const TOGGLE_DEV_MENU = 'TOGGLE_DEV_MENU'

export const toggleDevMenu = () => ({
  type: TOGGLE_DEV_MENU
})

const initialState = {
  devMenuIsOpen: false
}

import { updateObject } from '../../reducerUtils'
export const devReducer = (state=initialState, action) => {
  switch (action.type) {
    case TOGGLE_DEV_MENU:
          return updateObject(state, {devMenuIsOpen: !state.devMenuIsOpen})
    default:
      return state
  } // END switch
}

const mapStateToProps = (state) => ({
  active: state.devMenu.devMenuIsOpen
})

export default connect(mapStateToProps)(CoolButtons)


const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
