const express = require('express');
const router = express.Router();
const exerciseRoutine = require('../utils/exerciseStorage');
const getTodaysDate = require('../utils/getTodaysDate');
const project = 'exercise-tracker';

const todaysDate = getTodaysDate();

router.get('/', (req, res) => {
    res.render(`portfolio/exercise-tracker`, { project, exerciseRoutine, todaysDate });
});

router.post('/', (req, res) => {
    const day = req.body.day;
    const exercise = req.body.exercise;
    const sets = req.body.sets;
    const reps = req.body.reps;
    exerciseRoutine[`${day}`].workouts.push([exercise, sets, reps]);
    res.redirect('/portfolio/exercise-tracker/modify');
});

router.get('/modify', (req, res) => {
    res.render('portfolio/exercise-tracker/modify', { project, exerciseRoutine });
});

module.exports = router;