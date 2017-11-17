var express = require('express');
var bodyParser = require('body-parser');

var routes = require('./controller/routes.js');

var app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use('/', routes);

app.use(express.static('./client'));

var PORT = process.env.PORT || 8000;

app.listen(PORT, function() {
	console.log("Listening on PORT" + PORT);
});