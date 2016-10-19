var express = require('express');
var indexRouter = express.Router();


indexRouter.get('/', function(request, response, next){
  response.sendFile('../public/html/index.html', {root: __dirname});
  next();
});

module.exports = indexRouter;
