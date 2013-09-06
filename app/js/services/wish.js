'use strict';

foodMeApp.service('wish', function Wish(localStorage, customer, $rootScope, $http, alert) {
  var self = this;
  self.restaurants;

  //localStorage.clear();

  self.add = function(item, restaurant) {

    if (item) {

      item.restaurant = restaurant.id;

      if(!self.restaurants[restaurant.id]){
        self.restaurants[restaurant.id] ={};
        self.restaurants[restaurant.id].items = [item];
        self.restaurants[restaurant.id].name = restaurant.name;
      }else{
        if (self.restaurants[restaurant.id].items.indexOf(item) == -1){
          self.restaurants[restaurant.id].items.push(item);
        }
      }
    }
  };


  self.remove = function(item) {
    var index = self.restaurants[item.restaurant].items.indexOf(item);
    if (index >= 0) {
      self.restaurants[item.restaurant].items.splice(index, 1);
    }
    if (!self.restaurants[item.restaurant].items.length) {
      delete self.restaurants[item.restaurant];
    }
  }


  self.total = function() {
    var total = 0;
    for (var restaurant in self.restaurants) {
      if(self.restaurants.hasOwnProperty(restaurant)){
        total += self.restaurants[restaurant].items.length;
      }
    };
    return total;
  };


  createPersistentProperty('restaurants', 'fmWishItems', Object);

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