/* regular actions */
export const ITEM_MARK_READ = 'ITEM_MARK_READ'
export const ITEM_REVEAL    = 'ITEM_REVEAL'
export const OPEN_READER    = 'UPDATE_LAST_TIME_READ'
export const RESET_LIBRARY  = 'RESET_LIBRARY'


export const resetLibrary = () => ({
  type: RESET_LIBRARY
})

export const itemMarkRead = (index) => ({
  type: ITEM_MARK_READ,
  time: Date.now(),
  index,
})

// makes book at the top of the curriculum stack available
export const itemReveal = () => ({
  type: ITEM_REVEAL,
  time: Date.now()
})

export const updateLastTimeRead = (index) => ({
  type: OPEN_READER,
  time: Date.now(),
  index
})
