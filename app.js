
var http = require('http')
var express = require('express')
var app = express()

app.get("/", function(req, res, next){
  return res.send('hi');
});

app.get("/hoge", function(req, res, next){
  return res.send("hoge");
});

var server = http.createServer(app);
server.listen('3000');
