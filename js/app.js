'use strict';

(function () {
    define([
        'angular',
        'ui-router',
        'config',
    ], function (ng, router, config) {
        let app = angular.module('testApp', ['ui.router']);
        config(app);

        app.controller('NotLoadController', function ($scope) {
            $scope.hello = 'Hello from not loaded controller';
        });

        return app;
    });
})();