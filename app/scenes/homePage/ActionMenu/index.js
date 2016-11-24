import React, { Component } from 'react'
import { StyleSheet }  from 'react-native'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { itemReveal, resetLibrary } from 'app/components/bookShelf/BookListActions'

const ActionMenu = ({dispatch}) => (
  <ActionButton buttonColor="grey" verticalOrientation='down' position="right" hideShadow={true} spacing={10} offsetY={0} offsetX={20}>
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

export default SickButtons = connect()(ActionMenu)

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
