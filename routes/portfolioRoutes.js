const express = require('express');
const router = express.Router();
const twitterRoutes = require('./twitterRoutes');
const weatherRoutes = require('./weatherRoutes');
const tattooShopV2 = require('./tattooShopV2');

router.use('/twitter-clone', twitterRoutes)
router.use('/weather', weatherRoutes);
router.use('/tattoo-shop-v2', tattooShopV2);
router.get('/:project', (req, res) => {
  const { project } = req.params;
  /*
  Project name is fed to views/layouts/boilerplate.ejs
  so it can grab the corresponding stylesheet and script
  */
  res.render(`portfolio/${project}`, { project });
});

module.exports = router;
