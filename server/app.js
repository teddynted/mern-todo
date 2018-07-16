var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');

var app = express();

//var mongoURL = 'mongodb://localhost/todo';
var mongoURL = 'mongodb://heroku_62vkwwg1:np7qvrhqc6nfetk46kl2ejfhd4@ds239681.mlab.com:39681/heroku_62vkwwg1';

var http = require('http');

mongoose.connect( mongoURL, (err, db) => {
    if(err) console.log( 'mongodb Error: ' + err );
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/', indexRouter);

app.use(function(err, req, res, next) {
  console.error(err)
  res.status(500).json({message: 'an error occurred'})
})

module.exports = app;
