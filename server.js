// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure the Express application
var app = express();
var PORT = process.env.PORT || 8080;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware for parsing incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, './app/routes/apiRoutes'))(app);
require(path.join(__dirname, './app/routes/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Izzys Friend Finder app is listening on PORT: ' + PORT);
});