var express = require('express');
var router = express.Router();
var apiKey = process.env.APIKEY || require('../config.js').apiKey;
var axios = require('axios');
var authorize = require('../middleware/auth.js');
var timeoutConfig = {
  timeout:2000
};

router.use(authorize);
router.get('/forecast/:latitude,:longitude', function(request, response){
  var url = buildForcastURL(request.params.latitude, request.params.longitude);
  axios.get(url, timeoutConfig)
       .then(function(forecast){
        response.send(forecast.data);
  })
       .catch(function(error){
        response.send(error);
 });
});

  module.exports = router;

  function buildForcastURL(latitude, longitude){
    var url = 'https://api.darksky.net/forecast/' + apiKey +'/'+ latitude + ',' + longitude;
    return url;
  }
