/**
 * Created by foram on 22/9/14.
 */


angular.module('weatherApp', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/weather', {
        templateUrl: '/partials/weather.html',
        controller: 'weatherController'
    }).otherwise({
        redirectTo: '/weather'
    });
}]).controller('weatherController', function ($http, $scope, $location) {

//    var url = "http://query.yahooapis.com/v1/public/";
//    var zipCode = "94086";
//    var query = encodeURIComponent("yql?q=select item from weather.forecast where location" + zipCode + "&format=json");
//    console.log(url + query);

    $scope.zipCode = "94086";
    $scope.getData=function(){
        var url = "http://query.yahooapis.com/v1/public/yql?q=select%20item%20from%20weather.forecast%20where%20location%3D" + $scope.zipCode + "&format=json";
        $http.get(url).success(function (data) {
            $scope.title = data.query.results.channel.item.title;
            document.getElementById("data").innerHTML=data.query.results.channel.item.description;
            console.log($scope.title);
        })

    }


});