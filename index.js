if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const engine = require('ejs-mate');
const nodemailer = require('nodemailer');
const methodOverride = require('method-override');
const path = require('path');
const AppError = require('./utils/AppError');
const portfolioRoutes = require('./routes/portfolioRoutes');

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json())
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/portfolio', portfolioRoutes);
app.get('/', (req, res) => {
  const query = req.query;
  console.log(query);
  res.render('home', { query });
});

app.post('/send', async (req, res, next) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Subject: ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  async function main() {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODEMAILERUSER,
        pass: process.env.NODEMAILERPASSWORD,
      },
    });

    let info = await transporter.sendMail({
      from: '"Nodemailer" <contact@gmail.com>',
      to: "villagomezh@jonweb.dev",
      subject: "Contact Request",
      text: "",
      html: output
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
  main().catch(console.error);

  res.redirect('/?email_sent=true');
});

// app.get('/resume', (req, res) => {
//   res.render('resume');
// });

app.all('*', (req, res, next) => {
  next(new AppError('Page Not Found', 404));
})

app.use((err, req, res, next) => {
  const {
    statusCode = 500
  } = err;
  if (!err.message) err.message = 'Oh No, Something Went Wrong!';
  res.status(statusCode).render('error', {
    err
  });
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
