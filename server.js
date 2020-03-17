
var http = require('http');
var express = require('express');

/*************************
 * Configuration Section
***************************/

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

/*************************
 * Allow Cors Policy
***************************/

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


/*************************
 * Web Server Functionality
***************************/

app.get('/', function(req, res){
  console.log('resquest on root page');
  res.send('Hello World!');
});

app.get('/about', function(req, res){
  res.send("I'm Havoc");
});

app.listen(8080, function(){
  console.log("Server running at localhost:8080");
});

/*************************
 * API Functionality
***************************/

var catalog = [];

app.get('/API/catalog', function(req, res){
  var data = [];
  res.json(catalog);
})

app.post('/api/items', function(req, res){
  console.log('Admin wants to save an item.');

  var item = req.body;
  console.log(item);

  item.id = catalog.length + 1;
  catalog.push(item);

  res.json(item);
});
