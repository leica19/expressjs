
"use strict";

// modules
var http = require('http');
var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

var Message = require('./schema/Message');

var app = express()

mongoose.connect('mongodb://mongo:27017/chatapp', function(err){
  if(err) {
    console.log(err);
  } else {
    console.log("##connected to MongoDB##");
  }
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get("/", function(req, res, next){
  return res.render('index', {title:"dadada"});
});

app.get("/update", function(req, res, next){
  return res.render('update');
});

app.post("/update", function(req, res, next) {
  var newMessage = new Message({
    username: req.body.username,
    message: req.body.message
  });
  newMessage.save((err)=>{
    if(err) throw err;
    return res.redirect("/");
  });
});

app.get("/express", function(req, res, next){
  return res.send("expressjs");
});

var server = http.createServer(app);
server.listen('3000');
