//controller
myApp.controller('loginController', ['$scope', '$http', function ($scope, $http) {
  $scope.feeds = {};
  //$scope.login = function() {
    var url = "https://api-staging.frockadvisor.com/v1/users/login"
    var key = "23425j5oi3jtrijgpofhpfokypo5kpokpokokpdofgkdpogkdpfokgpok3po45j30596405849445645644564joidjfogif";

    //Encrypting Email & Password
    var email = "U2FsdGVkX186ZQoxGpbxe7OYjK/Q1707q8mRPRvlPGusMORj5lp4tihIH8upFqkB";
    email = CryptoJS.AES.decrypt(email, key);
    email = email.toString(CryptoJS.enc.Utf8);
    email = email.replace(/\n/g, '');
    var password = "U2FsdGVkX1/8qpB+5i9WgdLVOJsLmMO8t2/X73O/wZY=";
    password = CryptoJS.AES.decrypt(password, key);
    password = password.toString(CryptoJS.enc.Utf8);
    password = password.replace(/\n/g, '');

    //connecting to json data
    $http({
        method: 'POST',
        url:  url,
        headers: {
          'Content-Type' : 'application/json',
          'Frockadvisor-Api-Key': key
        },
        data: {
          'email': email,
          'password': password
        }
    })
    //if OK get the data
    .success(function (data, status, headers, config) {
        var token = data.data.token;
        var url = "https://api-staging.frockadvisor.com/v1/feed"
        $http({
            method: 'GET',
            url:  url,
            headers: {
              'Content-Type' : 'application/json',
              'Frockadvisor-Api-Key': key,
              'Access-Token': token
            }
        })
        .success(function (data, status, headers, config) {
            $scope.feeds = angular.fromJson(data.data);
        })
        //if NOT OK retrieve an ERROR
        .error(function (data, status, headers, config) {
            console.log("Error in feed: \n" + data.status + "\n\n"+data.errors.message );
        });
    })
    //if NOT OK retrieve an ERROR
    .error(function (data, status, headers, config) {
        console.log("Error in login: \n" + data.status + "\n\n"+data.errors.message );
    });
  //}
}]);