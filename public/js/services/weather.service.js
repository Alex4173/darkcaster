(function() {

  angular.module('forecast-app')
    .factory('WeatherService', WeatherService);

  WeatherService.$inject = ['$http'];

  function WeatherService($http){
    var secretToken = {
      secret: 'its a secret'
    };

    var service = {};
    service.weatherData = [];
    service.getWeather = getWeather;
    return service;
  //var weatherData = [];
  //return {
  //weatherData: weatherData,
  //getWeather: getWeather
  //};

    function getWeather(latitude, longitude){
      service.lat = latitude;
      service.lon = longitude;
      var config = {
        headers: secretToken
      };
      var url = '/forecast/'+ latitude + ',' + longitude;
      return $http.get(url, config)
                  .then(function(response){
                    service.weatherData = response.data;
                  });
    }
  }
}());
