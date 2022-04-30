const express = require('express');
const router = express.Router();

router.get('/:project', (req, res) => {
    const { project } = req.params;
    res.render(`portfolio/${project}`, { project });
});

router.get('/:project/new', (req, res) => {
  const { project } = req.params;
  res.render(`portfolio/${project}/new`, { project });
});

module.exports = router;
