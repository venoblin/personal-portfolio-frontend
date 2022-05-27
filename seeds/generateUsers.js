const { adjectives, nouns, statements } = require('./userSeeds');
const { v4: uuid } = require('uuid');
const { twitterUsers, twitterTweets } = require('../utils/twitter-clone/twitterStorage');

function generateUsers(amount, maxTweets) {
  //LOOPS THROUGH CREATING A RANDOM USER EACH TIME
  for (let i = 1; i < amount; i++) {

    //GRABS A RANDOM ADJECTIVE AND NOUN INDEX
    const randAdj = Math.floor(Math.random() * adjectives.length);
    const randNou = Math.floor(Math.random() * nouns.length);
    //MAKES A USERNAME WITH THE ADJECTIVE AND NOUN
    const username = `${adjectives[randAdj]}${nouns[randNou]}`;

    twitterUsers.push({
      id: uuid(),
      user: username,
    });
  }

  //GENERATES TWEETS FOR EACH USER
  twitterUsers.forEach(user => {

    //MAKES SURE WE ONLY ADD TWEETS TO GENERATED USERS
    if (user.id.length !== 1) {

      const randAmount = Math.floor(Math.random() * maxTweets) + 1;
      for (let i = 0; i < randAmount; i++) {
        //GRABS RANDOM STATEMENT INDEX
        const randTweet = Math.floor(Math.random() * statements.length);

        //PUSHES A NEW TWEET WITH A RANDOM STATEMENT
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
