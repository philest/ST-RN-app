/* regular actions */
export const ITEM_MARK_READ                  = 'data/user/ITEM_MARK_READ'
export const ITEM_REVEAL                     = 'data/user/ITEM_REVEAL'
export const ITEM_UPDATE_LAST_TIME_OPENED    = 'data/user/ITEM_UPDATE_LAST_TIME_READ'
export const RESET_LIBRARY                   = 'data/user/RESET_LIBRARY'

export const resetLibrary = () => ({
  type: RESET_LIBRARY
})

export const itemMarkRead = (index) => ({
  type: ITEM_MARK_READ,
  time: Date.now(),
  index,
})

// makes book at the top of the curriculum stack available
// TODO: unit test the heck out of this
export const itemReveal = (time = 0) => ({
  type: ITEM_REVEAL,
  time: time || Date.now()
})

export const itemUpdateLastTimeRead = (index) => ({
  type: ITEM_UPDATE_LAST_TIME_OPENED,
  time: Date.now(),
  index
})
