const express = require('express');
const app = express();
const engine = require('ejs-mate');
const methodOverride = require('method-override');
const path = require('path');
const AppError = require('./utils/AppError');
const portfolioRoutes = require('./routes/portfolioRoutes');

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/portfolio', portfolioRoutes);
app.get('/', (req, res) => {
    res.render('home');
});

app.all('*', (req, res, next) => {
    next(new AppError('Page Not Found', 404));
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!';
    res.status(statusCode).render('error', { err });
})

app.listen(3000, () => {
    console.log('STARTED SERVER ON PORT 3000');
});
