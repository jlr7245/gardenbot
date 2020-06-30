require('dotenv').config();
const express = require('express');
const logger = require('morgan');

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use(logger('dev'));

app.use((req, res, next) => {
  res.locals.data = {};
  next();
});

app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.warn(err);
  res.status(500).json({ error: err, message: err.message });
});
