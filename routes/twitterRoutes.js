const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');
const project = 'twitter-clone';
let { twitterUsers, twitterTweets } = require('../utils/twitter-clone/twitterStorage');
const generateUsers = require('../seeds/generateUsers');

//GENERATES 20 RANDOM USERS WITH A MAX TWEET AMOUNT OF 15 EACH
generateUsers(20, 15);

router.get('/', (req, res) => {
    res.render(`portfolio/twitter-clone`, { project, twitterUsers, twitterTweets });
});

router.post('/', (req, res) => {
    const newTweet = {
        id: uuid(),
        text: req.body.text,
        userId: '1'
    }
    twitterTweets.unshift(newTweet);
    res.redirect(`/portfolio/twitter-clone`)
});

router.get('/users', (req, res) => {
  res.render('portfolio/twitter-clone/users', { project, twitterUsers });
});

router.get('/:userId', (req, res) => {
  const { userId } = req.params;

  //FINDS USER
  const person = twitterUsers.find(u => u.id === userId);

  //MAKES AN ARRAY WITH ONLY THEIR TWEETS
  const tweets = twitterTweets.filter(t => t.userId === userId);
  res.render('portfolio/twitter-clone/profile', { project, person, tweets });
});

router.get('/:userId/:tweetId', (req, res) => {
  const { userId, tweetId } = req.params;

  //FINDS USER AND TWEET
  const person = twitterUsers.find(u => u.id === userId);
  const tweet = twitterTweets.find(t => t.id === tweetId);
  res.render('portfolio/twitter-clone/edit', { project, person, tweet });
});

router.patch('/:userId/:tweetId', (req, res) => {
  const { userId, tweetId } = req.params;

  //FINDS TWEET THEN UPDATES THE TEXT
  const tweet = twitterTweets.find(t => t.id === tweetId);
  tweet.text = req.body.text;
  res.redirect(`/portfolio/twitter-clone/${ userId }`);
});

router.delete('/:userId/:tweetId', (req, res) => {
    const { userId, tweetId } = req.params;

    //FILTERS ARRAY WITHOUT THE DELETED TWEET
    twitterTweets = twitterTweets.filter(t => t.id !== tweetId);
    res.redirect(`/portfolio/twitter-clone/${ userId }`);
});

module.exports = router;
