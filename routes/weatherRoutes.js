if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const router = express.Router();
const AppError = require('../utils/AppError');
const project = 'weather';
const axios = require('axios');

const weatherApiOptions = {
  method: 'GET',
  url: 'https://yahoo-weather5.p.rapidapi.com/weather',
  params: {
    location: '',
    format: 'json',
    u: 'f'
  },
  headers: {
    'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.RAPIDAPIKEY
  }
};

router.get('/', (req, res, next) => {
  axios.request(weatherApiOptions).then(function(response) {
    const data = response.data;

    res.render('portfolio/weather', { project, data });
  }).catch(function(error) {
    weatherApiOptions.params.location = '';
    next(new AppError(error.response.statusText, error.response.status));
  });
});

router.post('/', (req, res) => {
  weatherApiOptions.params.location = req.body.zip;
  res.redirect('/portfolio/weather');
});

module.exports = router;
