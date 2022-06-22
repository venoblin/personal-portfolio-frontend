const express = require('express');
const router = express.Router();
const project = 'tattoo-shop-v2'
let isOnWorkerPage = false;

router.get('/', (req, res) => {
  isOnWorkerPage = false;

  res.render('portfolio/tattoo-shop-v2', { project, isOnWorkerPage });
});

router.get('/:worker', (req, res) => {
  isOnWorkerPage = true;
  const { worker } = req.params;

  res.render(`portfolio/tattoo-shop-v2/${worker}`, { project, isOnWorkerPage });
});

module.exports = router;
