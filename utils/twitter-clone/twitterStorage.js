const { v4: uuid } = require('uuid');

module.exports.twitterUsers = [
    {
      id: 1,
      user: 'adminAccount'
    },
    {
        id: 2,
        user: 'jvh',
    },
    {
        id: 3,
        user: 'mvh',
    },
    {
        id: 4,
        user: 'cvh',
    }
]

module.exports.twitterTweets = [
  {
    id: 1,
    text: 'I am jvh',
    userId: 2
  },
  {
    id: 4,
    text: 'my second tweet',
    userId: 2
  },
  {
    id: 2,
    text: 'I am mvh',
    userId: 3
  },
  {
    id: 3,
    text: 'I am cvh',
    userId: 4
  }
]
