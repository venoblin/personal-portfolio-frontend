const express = require('express');
const router = express.Router();
const twitterRoutes = require('./twitterRoutes')

router.use('/twitter-clone', twitterRoutes)
router.get('/:project', (req, res) => {
  const { project } = req.params;
  res.render(`portfolio/${project}`, { project });
});

module.exports = router;
