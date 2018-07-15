
var http = require('http')
var express = require('express')
var app = express()
var path = require('path')

app.get("/", function(req, res, next){
  return res.render('index', {title:"dadada"});
});

app.get("/express", function(req, res, next){
  return res.send("expressjs");
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

var server = http.createServer(app);
server.listen('3000');
