(function () {
    define(['app'], function (app) {
        app.controller('ViewController', ViewController);

        function ViewController($scope) {
            $scope.hello = 'Hello from view Controller';
        }
    });
})();