'use strict';

foodMeApp.directive('fmWishList', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/fmWishList.html',
    scope: {},
    controller: function FmWishListController($scope, wish) {
      $scope.wish = wish;
    }
  };
});
