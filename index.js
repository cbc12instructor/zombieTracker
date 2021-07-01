// libraries we need for our app
const states = require('states-us');

// web server initialization
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/census', function(req, res) {
	// TODO -- get US census data from somewhere... :shrug:
	res.json(states.default);
});

app.listen(80);