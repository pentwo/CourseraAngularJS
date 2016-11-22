(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider',];
function RoutesConfig($stateProvider, $urlRouterProvider) {
	 $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
  })

  .state('categories', {
  	url: '/categories',
  	templateUrl: 'src/menu/templates/categories.template.html',
  	controller: 'CategoriesController as categoriesList',
  	resolve: {
  		categoriesItems: ['MenuDataService', function(MenuDataService) {
  			console.log(MenuDataService);
  			return MenuDataService.getAllCategories();

  	}]}
  })
  .state('items', {
  	url: '/items/{categoryShortName}',
  	templateUrl: 'src/menu/templates/items.template.html',
  	controller: 'ItemsController as itemList',
  	resolve: {
   		listItems: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
  			
  			return MenuDataService.getItemsForCategory(categoryShortName);

  	}]}

  });

}

})();
