var express = require('express');
var app = express();
var db = require('./db');
var cors = require ('cors');
app.use(cors());

app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});

var AuthController = require('./api/Auth/AuthController');
app.use('/api/auth', AuthController);
var ScoreController = require('./api/ScoreController');
app.use('/api/score', ScoreController);

module.exports = app;