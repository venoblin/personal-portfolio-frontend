const express = require('express');
const router = express.Router();
const twitterRoutes = require('./twitterRoutes')

router.use('/twitter-clone', twitterRoutes)

router.get('/:project', (req, res) => {
  const { project } = req.params;
  /* 
  PROJECT NAME IS FED TO views/layouts/boilerplate.ejs SO IT CAN GRAB
  THE PROJECTS CORRESPONDING JS FILE AND CSS FILE
  */
  res.render(`portfolio/${project}`, { project });
});

module.exports = router;
