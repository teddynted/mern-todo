const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');

// MongoDB connection url
//const mongoURL = 'mongodb://localhost/todo';
const mongoURL = 'mongodb://heroku_62vkwwg1:np7qvrhqc6nfetk46kl2ejfhd4@ds239681.mlab.com:39681/heroku_62vkwwg1';

const http = require('http');

// Connect to MongoDB
mongoose.connect( mongoURL, (err, db) => {
    if(err) console.log( 'mongodb Error: ' + err );
});

app.use(express.static(path.join(__dirname, '../client/build')));

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.json());

// Create a server
const server = http.createServer(app);

// Import routes
const routes = require('./routes/index')();
app.use('/', routes);

server.listen(port);
