(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService ($http, ApiPath) {
	var service = this;
	var userDatabase = [];

	// service.checkFavCategory = function (category) {
	//     var config = {};
	//     if (category) {
	//       config.params = {'category': category};
	//     }

	// 	return $http.get(ApiPath + '/menu_items.json', config)
	// 				.then(function (response) {
	// 					return response.data;
	// 				}, function (error) {
	// 					return error.data
	// 				}
	// 	);
	// };

	service.addNewUser = function (user) {
		userDatabase.push(user);
		console.log(userDatabase);
	};

}

})();
