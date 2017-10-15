'use strict'
var express = require('express');
const path = require('path');
const cors = require('cors');
var app = express();

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
app.use(cors());
app.use(express.static('dist'));
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
});

app.get('/test', function(req, res){
  var a = {
    "msg":"this is msg",
    "type":1,
    "name":"测试"
  };
  res.json(a);
  //res.send(JSON.stringify(a));
});

app.get('/pay', function(req, res){
  res.sendFile(resolve('/dist/index.html'));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
