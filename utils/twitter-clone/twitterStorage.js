const { v4: uuid } = require('uuid');

module.exports.twitterUsers = [
    {
      id: 0,
      user: 'adminAccount'
    },
    {
        id: 1,
        user: 'jvh',
    },
    {
        id: 2,
        user: 'mvh',
    },
    {
        id: 3,
        user: 'cvh',
    }
]

module.exports.twitterTweets = [
  {
    userId: 1,
    text: 'I am jvh'
  },
  {
    userId: 2,
    text: 'I am mvh'
  },
  {
    userId: 3,
    text: 'I am cvh'
  }
]
