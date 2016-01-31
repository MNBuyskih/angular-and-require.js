'use strict';

(function () {
    define([], function () {
        return function (app) {
            app.config(config(app));
        };

        function route(config) {
            let controllerUrl = config.controllerUrl;
            if (!controllerUrl) return config;

            delete config.controllerUrl;
            config.resolve = {load};

            return config;

            function load($q, $rootScope) {
                var deferred = $q.defer();
                require([controllerUrl], function () {
                    $rootScope.$apply(function () {
                        deferred.resolve();
                    });
                });
                return deferred.promise;
            }
        }

        function config(app) {
            return function ($stateProvider, $urlRouterProvider, $controllerProvider) {
                app.controller = $controllerProvider.register;

                $stateProvider
                    .state('index', route({
                        url: '/index',
                        templateUrl: 'templates/index.html',
                        controller: 'IndexController',
                        controllerUrl: 'controllers/IndexController',
                    }))
                    .state('view', route({
                        url: '/view',
                        templateUrl: 'templates/index.html',
                        controller: 'ViewController',
                        controllerUrl: 'controllers/ViewController',
                    }))
                    .state('notLoaded', route({
                        url: '/notLoaded',
                        templateUrl: 'templates/index.html',
                        controller: 'NotLoadController',
                    }));

                $urlRouterProvider.otherwise("/index");
            }
        }
    });
})();