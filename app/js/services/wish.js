'use strict';

foodMeApp.service('wish', function Wish(localStorage, customer, $rootScope, $http, alert) {
  var self = this;

  self.add = function(item, restaurant) {
    if (!self.restaurant || !self.restaurant.id) {
      self.restaurant = {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description
      };
    }

    self.items.forEach(function(wishItem) {
      if (item && wishItem.name == item.name) {
        wishItem.qty ++;
        item = null;
      }
    });
    if (item) {
      item.restaurant = {};
      item.restaurant = restaurant.id;
      item = angular.copy(item);
      item.qty = 1;
      self.items.push(item);
    }
  };


  self.remove = function(item) {
    var index = self.items.indexOf(item);
    if (index >= 0) {
      self.items.splice(index, 1);
    }
    if (!self.items.length) {
      self.restaurant = {};
    }
  }


  self.total = function() {
    return self.items.length;
  };


  createPersistentProperty('items', 'fmWishItems', Array);

  function createPersistentProperty(localName, storageName, Type) {
    var json = localStorage[storageName];

    self[localName] = json ? JSON.parse(json) : new Type;

    $rootScope.$watch(
        function() { return self[localName]; },
        function(value) {
          if (value) {
            localStorage[storageName] = JSON.stringify(value);
          }
        },
        true);
  }
});