(function (){
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant ('ApiBaseUrl', 'https://davids-restaurant.herokuapp.com');


MenuDataService.inject = ['$http', 'ApiBaseUrl']
function MenuDataService($http, ApiBaseUrl ) {
	var service = this;

	service.getAllCategories = function () {
		return $http ({
				method: "GET",
				url: ApiBaseUrl + '/categories.json'
				}).then(function (result){
					var foundCategories = result.data;

					return foundCategories;
				});
	};

	service.getItemsForCategory = function (categoryShortName) {
		return $http ({
				method: "GET",
				url: ApiBaseUrl + '/menu_items.json?category=' + categoryShortName
				
				}).then(function (result){
					var foundItems = result.data;
					return foundItems;
				});
	};

}

})();