(function () {
    define(['app'], function (app) {
        app.controller('IndexController', IndexController);

        function IndexController($scope) {
            $scope.hello = 'Hello from index Controller';
        }
    });
})();