// sample angular code

// angular.module('myApp', ['ngMaterial'])
// .controller('AppCtrl', function($scope) {});

angular
  .module('myApp', ['ngMaterial'])
  .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {

     $scope.showInfoStudyUp = false;

      $scope.showInfoStudyUpFunc = function(){
        if($scope.showInfoStudyUp === false) {
          $scope.showInfoStudyUp = true;
        } else {
          $scope.showInfoStudyUp = false;
        }
      };

      $scope.showInfoPlayThis = false;

      $scope.showInfoPlayThisFunc = function(){
        if($scope.showInfoPlayThis === false) {
          $scope.showInfoPlayThis = true;
        } else {
          $scope.showInfoPlayThis = false;
        }
      };

    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };
    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle();
      }, 200);
    }
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle();
      };
    }

  })
  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('right').close();
    };
  });
