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

blogModule.controller('contactController', ['$scope', '$window', function ($scope, $window) {

    $scope.contactInfo = {
        name: '',
        email: '',
        telephone: '',
        message: ''
    }

    $scope.previousContacts = angular.fromJson($window.localStorage.getItem("contactInfo")) || [];
    $scope.showSuccess = false;
    $scope.save = function () {
        $scope.previousContacts.push({
            name: $scope.contactInfo.name,
            email: $scope.contactInfo.email,
            telephone: $scope.contactInfo.telephone,
            message: $scope.contactInfo.message
        })
        $scope.showSuccess = true;
        $window.localStorage.setItem("contactInfo", angular.toJson($scope.previousContacts));
        $scope.contactInfo.name = $scope.contactInfo.email = $scope.contactInfo.telephone = $scope.contactInfo.message = '';
        $scope.sentMessage.$setPristine();
        $scope.sentMessage.$setUntouched();

    }

}]);