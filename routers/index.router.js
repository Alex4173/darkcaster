var express = require('express');
var indexRouter = express.Router();
var path = require('path');

indexRouter.get('/', function(request, response){
  response.sendFile('public/html/index.html', {root: path.resolve('./')});

});

module.exports = indexRouter;
