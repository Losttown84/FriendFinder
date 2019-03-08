// I looked at others people's githubs and saw this body parser var and the use of it for json and text. When this is graded, can I get some more light as to what this does for the files in lamens terms?

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//  Express app
var app = express();
var PORT = process.env.PORT;

// Uncovering the directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Parsing incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// App routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});