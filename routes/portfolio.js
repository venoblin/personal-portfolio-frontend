const express = require('express');
const router = express.Router();

router.get('/:project', (req, res) => {
    const { project } = req.params;
    res.render(`portfolio/${project}`, { project });
});

module.exports = router;
