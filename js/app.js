var blogModule = angular.module('blog',
[
 'ngRoute',
  'ngMessages'
]);

blogModule.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/home',
          {
              templateUrl: 'partials/home.html'
          })
          .when('/about',
          {
              templateUrl: 'partials/about.html'
          })
          .when('/post',
          {
              templateUrl: 'partials/post.html'
          })
          .when('/contact',
          {
              templateUrl: 'partials/contact.html',
              controller: 'contactController'
          })
          .otherwise({ redirectTo: '/home' });
}]);

