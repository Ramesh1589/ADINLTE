(function () {
    /*Module Creation*/
    /* Integratre ui.router*/
    var app = angular.module("myApp", ['ui.router', 'login', 'dashboard']);
    /*consuming the module*/
    
    app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider",
                
              function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise("login");
                 
            var loginObj = {
                templateUrl: "app/templates/login.html",
                url: "/login",
                controller: "loginCtrl"
            };
            
              var dashboardObj = {
                  templateUrl: "app/templates/dashboard.html",
                  url:"/dashboard",
                  controller: "dashboardCtrl"
            };
                 
            $stateProvider.state("login", loginObj);
            $stateProvider.state("dashboard", dashboardObj);
            
                 
            console.log("App Module Loaded");
    }]);
    app.run([function () {
        console.log("App is Runing");
    }]);
})();
/*
 config
 run
 controller
 service
 factory
 filter
 directive
 provider
 constant
 value
 component.
 

*/