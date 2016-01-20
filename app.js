var application = angular.module("myapp", []);

// Bind a controller to a module
// The first parameter is a name, the second is a constructor
application.controller("HelloController", function($scope) {
    $scope.hello = {};
    $scope.hello.title = "World";
});