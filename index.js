const express = require('express');
const app = express();
const engine = require('ejs-mate');
const methodOverride = require('method-override');
const path = require('path');
const portfolioRoutes = require('./routes/portfolio');

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/portfolio', portfolioRoutes);
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('STARTED SERVER ON PORT 3000');
});