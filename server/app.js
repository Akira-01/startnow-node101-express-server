// import files and packages up here
var express = require('express');
var topSpotsData = require('./data.json');
var morgan = require('morgan');

// create your express server below
var app = express();

app.use(morgan('tiny'));

app.get('/', function(req, res){
    res.send("Hello World");  
});

app.get('/data', function(req, res){
    res.json(topSpotsData);    
});

// add your routes and middleware below
// morgan(function (tokens, req, res) {
//     return [
//       tokens.method(req, res),
//       tokens.url(req, res),
//       tokens.status(req, res),   
//       tokens.res(req, res, 'content-length'), '-',
//       tokens['response-time'](req, res), 'ms'
//     ].join(' ')
//   })


// finally export the express application
module.exports = app;
