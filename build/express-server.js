'use strict'
var express = require('express');
const path = require('path');
var app = express();

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

app.use(express.static('dist'));

app.get('/pay', function(req, res){
  res.sendFile(resolve('/dist/index.html'));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
