(function () {
"use strict";

angular.module('public')
.controller('MenuController', MenuController);

MenuController.$inject = ['menuCategories', 'UserData'];
function MenuController(menuCategories, UserData) {
  var $ctrl = this;
  $ctrl.menuCategories = menuCategories;
}


})();
