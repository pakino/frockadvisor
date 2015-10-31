//controller for the navigation menu
myApp.controller('navigationController', ['$scope', '$http', function ($scope, $http) {
  $scope.pages = {};
  //connecting to json data
  $http.get("assets/json/pages.json")
  //if OK get the data
  .success(function (data, status, headers, config) {
      $scope.pages = angular.fromJson(data.pages); 
  })
  //if NOT OK retrieve an ERROR
  .error(function (data, status, headers, config) {
      console.log("Error in pages controller: \n" + data + "\n\n" + status);
  });
}]);


//controller for the page injector
myApp.controller('pageController', function($scope) {
  $scope.message = 'This is just a demo.';
});