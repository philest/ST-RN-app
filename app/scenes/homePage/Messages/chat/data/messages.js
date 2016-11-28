module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: '',
    newStory: {
      title: 'The Magic Seed',
      titleImage: require('../title.jpg')
    },
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
      name: 'React Native',
    },
  },

];
