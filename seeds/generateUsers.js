const { adjectives, nouns } = require('./userSeeds');
const { v4: uuid } = require('uuid');
const twitterStorage = require('../utils/twitter-clone/twitterStorage');

function generateUsers(amount) {
  for (let i = 1; i < amount; i++) {
    const randAdj = Math.floor(Math.random() * adjectives.length);
    const randNou = Math.floor(Math.random() * nouns.length);

    const username = `${adjectives[randAdj]}${nouns[randNou]}`

    twitterStorage.push({
      id: uuid(),
      user: username,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
    });

  }
}

module.exports = generateUsers;
