(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService', 'categoriesItems'];
function CategoriesController(MenuDataService, categoriesItems) {
  var categoriesList = this;
  categoriesList.categories = categoriesItems;
  console.log(categoriesList.categories);

  // categoriesList.name = categoriesItems.name;
  // categoriesList.short_name = categoriesItems.short_name;
}

})();
