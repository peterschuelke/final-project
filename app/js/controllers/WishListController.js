'use strict';

foodMeApp.controller('WishListController',
    function WishListController($scope, $routeParams, Restaurant, wish, cart) {

  $scope.restaurants = wish.restaurants;
  $scope.wish = wish;
  $scope.cart = cart;

});