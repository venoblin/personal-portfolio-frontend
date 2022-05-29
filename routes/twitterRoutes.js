const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');
const project = 'twitter-clone';
let { twitterUsers, twitterTweets } = require('../utils/twitter-clone/twitterStorage');
const generateUsers = require('../seeds/generateUsers');

//20 random users each with a max of 15 random tweets
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
    res.redirect('/portfolio/twitter-clone')
});

router.get('/users', (req, res) => {
  res.render('portfolio/twitter-clone/users', { project, twitterUsers });
});

router.get('/users/:userId', (req, res) => {
  const { userId } = req.params;
  const person = twitterUsers.find(u => u.id === userId);
  const tweets = twitterTweets.filter(t => t.userId === userId);
  res.render('portfolio/twitter-clone/profile', { project, person, tweets });
});

router.get('/users/:userId/:tweetId', (req, res) => {
  const { userId, tweetId } = req.params;
  const person = twitterUsers.find(u => u.id === userId);
  const tweet = twitterTweets.find(t => t.id === tweetId);
  res.render('portfolio/twitter-clone/edit', { project, person, tweet });
});

router.patch('/users/:userId/:tweetId', (req, res) => {
  const { userId, tweetId } = req.params;
  const tweet = twitterTweets.find(t => t.id === tweetId);
  tweet.text = req.body.text;
  res.redirect(`/portfolio/twitter-clone/users/${ userId }`);
});

router.delete('/users/:userId/:tweetId', (req, res) => {
    const { userId, tweetId } = req.params;
    twitterTweets = twitterTweets.filter(t => t.id !== tweetId);
    res.redirect(`/portfolio/twitter-clone/users/${ userId }`);
});

module.exports = router;
