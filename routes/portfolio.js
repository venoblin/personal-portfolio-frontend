const express = require('express');
const router = express.Router();
const exerciseRoutes = require('./exerciseTracker');

router.use('/exercise-tracker', exerciseRoutes);
router.get('/:project', (req, res) => {
  const { project } = req.params;
  res.render(`portfolio/${project}`, { project });
});

module.exports = router;
