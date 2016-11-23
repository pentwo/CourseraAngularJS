(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', 'menuItems'];
function ItemsController(MenuDataService, menuItems) {
  var itemList = this;
  // console.log(menuItems);
  itemList.menuItems = menuItems;
  // console.log(itemList.menuItems.menu_items);

  // categoriesList.name = categoriesItems.name;
  // categoriesList.short_name = categoriesItems.short_name;
}

})();
