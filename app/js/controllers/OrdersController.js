'use strict';

foodMeApp.controller('OrdersController',
    function OrdersController($scope, cart) {
      $scope.orders = cart.orders;
      //var allOrders = cart.orders;

    var filter = $scope.filter = {
      recent: null,
    };

    $scope.$watch('filter', sortOrders, true);

    function sortOrders() {

      $scope.orders.sort(function(a, b) {
        if (a.orderId > b.orderId) {
          return filter.sortAsc ? 1 : -1;
        }

        if (a.orderId < b.orderId) {
          return filter.sortAsc ? -1 : 1;
        }

        return 0;
      });

    };

    $scope.sortBy = function(key) {
      if (filter.sortBy === key) {
        filter.sortAsc = !filter.sortAsc;
      } else {
        filter.sortBy = key;
        filter.sortAsc = true;
      }
    };

    $scope.sortIconFor = function(key) {
      if (filter.sortBy !== key) {
        return '';
      }

      return filter.sortAsc ? '\u25B2' : '\u25BC';
     };

});