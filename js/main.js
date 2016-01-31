(function () {
    require.config({
        paths: {
            angular: '../bower_components/angular/angular',
            'ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
        },
        shim: {
            'ui-router': ['angular'],
        },
        deps: ['bootstrap']
    });
})();