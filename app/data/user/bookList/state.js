import { ITEM_REVEAL, ITEM_MARK_READ, ITEM_UPDATE_LAST_TIME_OPENED, RESET_LIBRARY } from './bookListActions'
import { updateObject, updateItemInArray } from 'app/reducerUtils'

const bookListItem = (state, action) => {
  switch (action.type) {
    case ITEM_REVEAL:
      return updateObject(state, {timeRevealedAt: action.time})
    case ITEM_MARK_READ:
      return updateObject(state, {timeFirstRead: action.time})
    case ITEM_UPDATE_LAST_TIME_OPENED:
      return updateObject(state, {timeLastOpened: action.time})
    default:
      return state
  } // END switch...
} // END const bookListItem...


const bookList = (state = bookListArray, action) => {
  switch (action.type) {
    case RESET_LIBRARY:
      return bookListArray
    case ITEM_REVEAL:
      // find first book in booklist that hasn't been revealed
      // TODO: we're gonna have to do something real here eventually
      const newBookIndex = state.findIndex((elt) => !elt.timeRevealedAt)

      if (newBookIndex >= 0) {
        return [
          ...state.slice(0,newBookIndex),
          bookListItem(state[newBookIndex], action),
          ...state.slice(newBookIndex+1) // TODO would this be a better fit for immutable.js? Will it even make a difference
        ]
      }
      return state

    case ITEM_MARK_READ:
      if (!state[action.index].timeFirstRead) {
        return [
          ...state.slice(0,action.index),
          bookListItem(state[action.index], action),
          ...state.slice(action.index+1)
        ]
      }
      return state

    case ITEM_UPDATE_LAST_TIME_OPENED:
      return [
        ...state.slice(0,action.index),
        bookListItem(state[action.index], action),
        ...state.slice(action.index+1)
      ]
    default:
      return state
  } // END switch
} // END const bookList


export default bookList

const cook    = 'https://s3.amazonaws.com/st-messenger/day1/cook/cook8.jpg'
const chores  = 'https://s3.amazonaws.com/st-messenger/day1/chores/chores2.jpg'
const gordon = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRBQ5NmbgQuv9yZWakQhx537nz9Y_tFyigbKV7Ti4T508WSXKob'
const will   = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzw4uUsaLJz2IC1_fPuA_cl6lJEe_mgOONiSZsw5DH2x9v0Yk4'

// TODO: will probably want a timeRecievedAt field at some point
export const bookListArray =  [
    {
      title: 'Dinner at the Zoo',
      awsKey: 'cook',
      description: 'A story about animals that like to cook stuff',
      offset: 1,
      numPages: 11,
      timeRevealedAt: Date.now(),
      timeFirstRead: Date.now(),
      timeLastOpened: 0,
      coverDims: {x:266, y:309},
    },
    {
      title: 'Magic Seed',
      awsKey: 'seed',
      description: "A story about my magic seed!",
      offset:0,
      numPages:10,
      timeRevealedAt: Date.now(),
      timeFirstRead: 0,
      timeLastOpened: 0,
      coverDims: {x:300, y:332},
    },
    {
      title: "Baby Bird",
      awsKey: 'bird',
      description: "A story about learning to fly",
      offset:1,
      numPages: 10,
      timeRevealedAt: Date.now(),
      timeFirstRead: 0,
      timeLastOpened: 0,
      coverDims: {x:124, y:129},
    },
    {
      title: "Sam's Spaceship",
      awsKey: 'sam',
      description: "Sam adventures through space",
      offset:0,
      numPages:10,
      timeRevealedAt: Date.now(),
      timeFirstRead: 0,
      timeLastOpened: 0,
      bubbles: {
        2: [
          { x: 0.05, y:0.4, text: "What is Sam doing here?", ang:'20deg'},
        ],
        3: [
          { x: 0.15, y:0.05, text: "How does Sam play pretend?", ang:'-20deg'}
        ],
        4: [
          { x: 0.6, y:0.6, text: "Where does Sam explore?", ang:'20deg'}
        ],
        5: [
          { x: 0.65, y:0.6, text: "What is going on here?", ang:'-25deg'},
        ],
        6: [
          { x: 0.08, y:0.3, text: "What is Mom doing?", ang:'20deg'},
        ],
        7: [
          { x: 0.45, y:0.35, text: "What is Sam doing with Mom?", ang:'-25deg'},
        ],
      },
      coverDims: {x:624, y:631},
    },
    {
      title: "Mom's Rocket",
      awsKey: 'rocket',
      description: "Mom gets to come along on a space adventure",
      offset:0,
      numPages:5,
      timeRevealedAt: Date.now(),
      timeFirstRead: 0,
      timeLastOpened: 0,
      coverDims: {x:200, y:177},
    },
    {
      title: "The Ants!",
      awsKey: 'ants',
      description: "It's all about ants.",
      offset:0,
      numPages: 9,
      timeRevealedAt: 0,
      timeFirstRead: 0,
      timeLastOpened: 0,
      bubbles: {
        2: [
          { x: 0.15, y:0.55, text: "What will the ant do?"}
        ],
        3: [
          { x: 0.8, y:0.3, text: "Where do the ants live?"}
        ],
        6: [
          { x: 0.8, y:0.8, text: "Who left cake on the floor?"},
          { x: 0.8, y:0.2, text: "Dang, these ants are strong."}
        ],
      },
      coverDims: {x:333, y:495},
    },
    {
      title:'My Chores!',
      awsKey:'chores',
      description: "A story about helping",
      offset:0,
      numPages: 6,
      timeRevealedAt: 0,
      timeFirstRead: 0,
      timeLastOpened: 0,
      coverDims: {x:348, y:495},
    },
    {
      title: "Dream",
      awsKey: "dream",
      description: "A story about where you'll go after you fall asleep",
      offset:0,
      numPages: 8,
      timeRevealedAt: 0,
      timeFirstRead: 0,
      timeLastOpened: 0,
      coverDims: {x:333, y:495},
    },
    {
      title: 'Kitty',
      awsKey:'scratch',
      description: "A story about our cat",
      offset: 0,
      numPages:6,
      timeRevealedAt: 0,
      timeFirstRead: 0,
      timeLastOpened: 0,
      coverDims: {x:333, y:495},
    },
    {
      title: "Eli's Pets",
      awsKey: 'whale',
      description: "A story about kitchen swimming",
      offset:1,
      numPages:10,
      timeRevealedAt: 0,
      timeFirstRead: 0,
      timeLastOpened: 0,
      coverDims: {x:333, y:495},
    },
    {
      title: "Rosie's Find",
      awsKey: 'coon',
      description: "A story about a racoon finding her family",
      offset:1,
      numPages: 10,
      timeRevealedAt: 0,
      timeFirstRead: 0,
      timeLastOpened: 0,
      coverDims: {x:333, y:495},
    },
  ]
