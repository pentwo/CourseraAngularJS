(function (){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
	var ddo = {
		templateUrl: '/loader/template.html',
		scope: {
			narrowedItems: '<',
			onRemove: '&'
		},
		// controller: NarrowItDownController,
		// controllerAs: 'menu',
		// bindToController: true
	}

	return ddo;
};

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService){
	var menu = this;

	menu.findItems = function () {
		MenuSearchService.getMatchedMenuItems(menu.searchTerm)
		.then(function (result){
				menu.found = result
				console.log(menu.found);
			});
	}

	menu.removeItem = function (itemIndex) {
		menu.found.splice(itemIndex, 1);
	}

	menu.error = function () {
		return (menu.searchTerm === "" || menu.found ===[])
	};

};


MenuSearchService.$inject = ['$http']
function MenuSearchService ($http) {
	var service = this;

	service.getMatchedMenuItems = function (searchTerm) {
		console.log(searchTerm);
		return $http({
					method: "GET",
					url: "http://davids-restaurant.herokuapp.com/menu_items.json"
				}).then(function (result) {
					var foundItems = [];

					for (var i = 0; i < result.data.menu_items.length; i++) {
						if (result.data.menu_items[i].description.indexOf(searchTerm) !== -1) {
							
							foundItems.push(result.data.menu_items[i]);
							
						};
					};
					return foundItems;
				});
	};

};

})();