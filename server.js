var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require('path');
var exphbs = require("express-handlebars");

//creating the server
var app = express();
var port = process.env.PORT || 5500;
app.use(express.static(path.join(__dirname + '/views/public')));

//standard code for handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//standard code for body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
	type: "application/vnd.api+json"
}));

app.use(require('./controllers/burgers_controllers.js'));

//start the server
app.listen(port, function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log('listening on port: ' + port);
	}
})
