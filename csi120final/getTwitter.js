var express = require('express');
var sys = require('sys');
var oauth = require('oauth');
var http = require('http');
var engine = require('ejs');
//var scripts = require('./app/scripts');
//var twitterRoute = require('./routes/twitter');

var app = express();

var _twitterConsumerKer = "G8LDhi141G5xaff9kuWepA";
var _twitterConsumerSecret = "Mt13sFoqwcdOb0se2jdktl7g08HEXPmOUxkb58dY5k";

function consumer() {
	return new oauth.OAuth(
		"https://twitter.com/oauth/request_token", "https://twitter.com/oauth/access_token",
		_twitterConsumerKey, _twitterConsumerSecret, "1.0A", "http://badgestar.com/sessions/callback", "HMAC-SHA1");
}

app.configure('development', function(){
	app.set('views', __dirname+'/app/views');
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true}));
	app.use(express.logger());
	app.use(express.bodyParser());
	app.use(app.router);
});



app.engine('html', engine.renderFile);



http.createServer(app).listen(3000);

//app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');
app.get('/', function(req, res){
	res.render('/app/views/main.html')
	});