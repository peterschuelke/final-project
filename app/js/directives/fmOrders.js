'use strict';

foodMeApp.directive('fmOrders', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/fmOrders.html',
    scope: {},
    controller: function FmOrdersController($scope, cart) {
      $scope.orders = cart.orders;
    }
  };
});
