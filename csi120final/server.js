//server.js

var express = require('express'),
	http = require('http'),
	util = require('util'),
	engine = require('ejs');

var app = express();

app.set('views', __dirname+'/app/views');
app.set('scripts', __dirname+'/app/scripts');

/*
var express = require('express');
var sys = require('sys');
var oauth = require('oauth');
var http = require('http');
var ejs = require('ejs');
*/
app.engine('html', engine.renderFile);

app.get('/', function(req, res){
	res.render('main.html', function(err, stuff){
		res.write(stuff);
		res.end();
	});
});

http.createServer(app).listen(3000);