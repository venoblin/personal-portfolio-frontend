const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');
const project = 'twitter-clone';
let { twitterUsers, twitterTweets } = require('../utils/twitter-clone/twitterStorage');
const generateUsers = require('../seeds/generateUsers');

generateUsers(50);

router.get('/', (req, res) => {
    res.render(`portfolio/twitter-clone`, { project, twitterUsers, twitterTweets });
});

router.post('/', (req, res) => {
    const newTweet = {
        id: uuid(),
        text: req.body.text,
        userId: 1
    }
    twitterTweets.unshift(newTweet);
    console.log(twitterTweets);
    res.redirect(`/portfolio/twitter-clone`)
});

router.get('/users', (req, res) => {
  res.render('portfolio/twitter-clone/users', { project, twitterUsers });
});

router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const person = twitterUsers.find(u => u.id === parseInt(userId));
  const tweets = twitterTweets.find(t => t.userId === parseInt(userId));
  console.log(twitterTweets.find(t => t.userId === 2));
  res.render('portfolio/twitter-clone/profile', { project, person, tweets });
});

router.delete('/:userId/:tweetId', (req, res) => {
    const { tweetId } = req.params;
    twitterTweets = twitterTweets.filter(t => t.id !== tweetId);
    console.log(twitterTweets);
    res.redirect(`/portfolio/twitter-clone`);
});

module.exports = router;
