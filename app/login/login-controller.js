(function () {

    function loginCtrl(loginSvc,$scope, $state) {
        var vm=this;
        
        vm.userDetails = {};

        $scope.login = function () {
//                loginSvc.loginUser(vm.userDetails)
//                .then(function(response){
//                      console.log(response);
//                })
//                .catch(function(response){
//                    console.log(response);
//                })
            console.log("login Controller");
            $state.go("dashboard");
            
        };
        
      
        
    }
    
  var app =  angular.module("login");
    
  app.controller("loginCtrl", ["loginSvc","$scope","$state",loginCtrl]);

})();
