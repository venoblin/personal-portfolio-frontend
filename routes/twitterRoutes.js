const express = require('express');
const router = express.Router();
const twitterStorage = require('../utils/twitterStorage');
const project = 'twitter-clone';

router.get('/', (req, res) => {
    res.render(`portfolio/${project}`, { project, twitterStorage });
});

module.exports = router;
