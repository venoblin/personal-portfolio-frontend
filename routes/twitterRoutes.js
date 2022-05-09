const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');
const project = 'twitter-clone';
let twitterStorage = require('../utils/twitter-clone/twitterStorage');

router.get('/', (req, res) => {
    res.render(`portfolio/${project}`, { project, twitterStorage });
});

router.post('/', (req, res) => {
    const newTweet = {
        id: uuid(),
        user: 'adminUser',
        text: req.body.text
    }
    twitterStorage.unshift(newTweet);
    res.redirect(`/portfolio/${project}`)
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    twitterStorage = twitterStorage.filter(t => t.id !== id);
    res.redirect(`/portfolio/${project}`);
});

module.exports = router;
