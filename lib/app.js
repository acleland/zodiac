const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.use('/zodiac', require('./controllers/zodiac'));
// Error handling & 404 middleware for when
// a request doesn't match any app routes

app.use('/', (req, res) => {
  res.send(
    'Welcome to the Zodiac app. Visit /zodiac for json list of zodiac signs, or /zodiac/:id for details of a given zodiac sign.'
  );
});
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
