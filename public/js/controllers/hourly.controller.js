(function(){
  angular.module('forecast-app')
      .controller("HourlyController", HourlyController);

  HourlyController.$inject = ['$scope', 'WeatherService'];


  function HourlyController($scope, WeatherService){
    $scope.weather = WeatherService.weatherData;

    $scope.$watch(function(){
      return WeatherService.weatherData;
    }, function(newVal, oldVal){
      $scope.weather = WeatherService.weatherData;
    });
  }



}());
