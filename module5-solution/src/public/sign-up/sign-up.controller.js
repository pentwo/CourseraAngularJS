(function () {
'use strict';

angular.module('public')
.controller('RegistrationController', RegistrationController)
.directive('categoryValidation', categoryValidation);


RegistrationController.$inject = ['SignUpService', 'MenuService', 'UserData'];
function RegistrationController(SignUpService, MenuService, UserData){
	var regCtrl = this;
	var newUser = {};
	regCtrl.userData = UserData;


	// function for submit button
	regCtrl.submit = function () {
		// try to get menuIten using user's favMenuCategory
		var getItems = MenuService.getMenuItems(regCtrl.user.favMenuCategory);

		// deal with promise. once we get response, put everything together and sent addNewUser request to SignUpService 
		getItems.then(function(response){
			newUser = {
				firstName: regCtrl.user.firstName,
				lastName: regCtrl.user.lastName,
				email: regCtrl.user.email,
				phone: regCtrl.user.phone,
				favMenuCategory: regCtrl.user.favMenuCategory,
				favMenuItems: response
				}
			SignUpService.addNewUser(newUser);
			});

	};

}

categoryValidation.$inject = ['$q', '$http', 'ApiPath'];
function categoryValidation ($q, $http, ApiPath) {
	// costom directive return a ddo
	return {
		restrict: 'A',
		// ngModel to use $setValidity maniplulate categoryValidation validation state
		require: 'ngModel',
		link: function(scope, elm, attrs, ctrl) {
			var ngModel = ctrl;
			// set $watch to watch over any change
			scope.$watch(attrs.ngModel, function(category){
				$http.get(ApiPath + '/menu_items.json?category=' + category)
					.then(function(response){
						if (response.data.menu_items.length > 0) {
							ngModel.$setValidity('categoryValidation', true);
						} else {
							ngModel.$setValidity('categoryValidation', false);
						}
					}, function(error) {
						ngModel.$setValidity('categoryValidation', false);
					});
			});
		}
	};

};



})();