const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');
const twitterStorage = require('../utils/twitterStorage');
const project = 'twitter-clone';


router.get('/', (req, res) => {
    res.render(`portfolio/${project}`, { project, twitterStorage });
});

router.post('/', (req, res) => {
    const newTweet = {
        id: uuid(),
        user: 'adminUser',
        text: req.body.text
    }
    twitterStorage.push(newTweet);
    res.redirect(`/portfolio/${project}`)
});

router.delete('/:id', (req, res) => {

});

module.exports = router;
