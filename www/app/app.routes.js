// configure our routes for the navigation (pages)
myApp.config(function($routeProvider) {
    $routeProvider
    // route for the home page
    .when('/', {
        templateUrl : 'app/components/login/loginView.html',
        controller  : 'loginController'
    })
    // route for the login page
    .when('/login', {
        templateUrl : 'app/components/login/loginView.html',
        controller  : 'loginController'
    })
    // if something goes wrong...go to the home page
    .otherwise({
        redirectTo: '/'
    });
});