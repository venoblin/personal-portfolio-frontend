const { adjectives, nouns, statements } = require('./userSeeds');
const { v4: uuid } = require('uuid');
const { twitterUsers, twitterTweets } = require('../utils/twitter-clone/twitterStorage');

function generateUsers(amount) {
  for (let i = 1; i < amount; i++) {
    const randAdj = Math.floor(Math.random() * adjectives.length);
    const randNou = Math.floor(Math.random() * nouns.length);

    const username = `${adjectives[randAdj]}${nouns[randNou]}`

    twitterUsers.push({
      id: uuid(),
      user: username,
    });
  }

  twitterUsers.forEach(user => {
    if (user.id.length !== 1) {
      const tweetAmount = Math.floor(Math.random() * 10) + 1;

      for (let i = 0; i < tweetAmount; i++) {
        const randTweet = Math.floor(Math.random() * statements.length);

        twitterTweets.push({
          id: uuid(),
          text: statements[randTweet],
          userId: user.id
        });
      }
    }
  });
}

module.exports = generateUsers;
