const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');

const PORT = process.env.PORT || 8080;

// Initialize Express
const app = express();
app.set('views', path.join(__dirname, 'views'));

//set up handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');



// Configure middleware
// Use body-parser for handling form submissions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static(path.join(__dirname, 'public')));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost:27017/nyTimes");

// Routes
require('./routes/api/api')(app);
require('./routes/view/view')(app);
require('./scripts/scrape')(app);

// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT);
});
