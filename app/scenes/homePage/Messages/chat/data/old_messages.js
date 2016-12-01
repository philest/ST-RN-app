import Harlene from './Harlene'

module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Thank you :)',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'P. Esterman',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: '',
    newStory: 2,
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 0,
      name: 'StoryTime',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "Hi, Phil! Here's your first story from StoryTime :)",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'Ms. Stobierski',
      avatar: Harlene
    },
  },
];
