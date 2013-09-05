'use strict';

foodMeApp.controller('WishListController',
    function WishListController($scope, $routeParams, Restaurant, wish, cart) {

  $scope.wish = wish;
  $scope.cart = cart;

  var filter = $scope.filter = {
    wish: [],
  };

  for (var i = $scope.wish.items.length - 1; i >= 0; i--) {
    if($scope.wish.items[i].restaurant){
      if(filter.wish.indexOf($scope.wish.items[i].restaurant) == -1){
        filter.wish.push($scope.wish.items[i].restaurant);
      }
    }
  };

  var allRestaurants = Restaurant.query(filterRestaurants);

  $scope.$watch('filter', filterRestaurants, true);

  function filterRestaurants() {
    $scope.restaurants = [];

    // filter
    angular.forEach(allRestaurants, function(item, key) {

      for (var i = filter.wish.length - 1; i >= 0; i--) {
        if (filter.wish[i] && filter.wish[i] == item.id) {
          item.items = [];

          for (var i = $scope.wish.items.length - 1; i >= 0; i--) {
            if($scope.wish.items[i].restaurant && $scope.wish.items[i].restaurant == item.id){
              item.items.push($scope.wish.items[i]);
            }
          };
          $scope.restaurants.push(item);
        }

      };

    });
  };


});