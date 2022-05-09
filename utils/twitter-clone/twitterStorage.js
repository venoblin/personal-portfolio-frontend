const { v4: uuid } = require('uuid');

let twitterStorage = [
    {
        id: uuid(),
        user: 'jvh',
        text: 'lol'
    },
    {
        id: uuid(),
        user: 'mvh',
        text: 'hi'
    },
    {
        id: uuid(),
        user: 'cvh',
        text: 'wtf'
    }
]

module.exports = twitterStorage;