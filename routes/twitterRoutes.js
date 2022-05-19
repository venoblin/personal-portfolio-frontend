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

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    twitterTweets = twitterTweets.filter(t => t.id !== id);
    console.log(twitterTweets);
    res.redirect(`/portfolio/twitter-clone`);
});

router.get('/users', (req, res) => {
  res.render('portfolio/twitter-clone/users', { project, twitterUsers });
});

module.exports = router;
