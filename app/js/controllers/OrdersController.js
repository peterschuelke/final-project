'use strict';

foodMeApp.controller('OrdersController',
    function OrdersController($scope, cart) {
      console.log(cart.orders);
      $scope.orders = cart.orders;
});