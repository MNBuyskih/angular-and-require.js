(function () {
    define(['app'], function (app) {
        app.directive('navigation', navigation);

        function navigation() {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'templates/navigation.html',
                scope: {},
                link
            };

            function link($scope) {
                $scope.items = [
                    {label: 'Index', state: 'index',},
                    {label: 'View', state: 'view'},
                    {label: 'Not loaded', state: 'notLoaded'},
                ];
            }
        }
    });
})();