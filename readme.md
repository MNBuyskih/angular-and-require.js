# Example application using angular + require.js

Problem: load controllers on demand.

Solution: use `resolve` param in `ui.state`\`s `$stateProvider.state()`. See `js/config.js` for example.

When you define your states, set a state config wrapped with `route` method, and add `controllerUrl` param with route 
to your controller file:

```javascript
$stateProvider.state('index', route({
    url: '/index',
    templateUrl: 'templates/index.html',
    controller: 'IndexController',
    controllerUrl: 'controllers/IndexController',
}));
```

Method `route()` check the `controllerUrl` param, and if it defined define param `resolve`, that use a `require.js` and 
return a promise. 

Thats all!