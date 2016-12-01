import Harlene from './Harlene'

module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: '',
    newStory: 3,
    createdAt: new Date(Date.now()),
    user: {
      _id: 0,
      name: 'StoryTime',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Hi again! Here is tonight\'s story! :)',
    createdAt: new Date(Date.now()),
    user: {
      _id: 2,
      name: 'Ms. Stobierski',
      avatar: Harlene
    },
  },

];
