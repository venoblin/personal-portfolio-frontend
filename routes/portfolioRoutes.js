const express = require('express');
const router = express.Router();
const twitterRoutes = require('./twitterRoutes')

router.use('/twitter-clone', twitterRoutes)

router.get('/:project', (req, res) => {
  const { project } = req.params;
  /*
  Project name is fed to views/layouts/boilerplate.ejs 
  so it can grab the corresponding stylesheet and script
  */
  res.render(`portfolio/${project}`, { project });
});

module.exports = router;
