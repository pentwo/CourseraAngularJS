(function () {
'use strict';

angular.module('public')
.controller('RegistrationController', RegistrationController);
// .directive('categoryValidation', categoryValidation);

RegistrationController.$inject = ['SignUpService'];
function RegistrationController(SignUpService){
	var regCtrl = this;
	var newUser = {};

	regCtrl.submit = function () {
		newUser = {
			firstName: regCtrl.user.firstName,
			lastName: regCtrl.user.lastName,
			email: regCtrl.user.email,
			phone: regCtrl.user.phone,
			favMenuCategory: regCtrl.user.favMenuCategory
		}
		SignUpService.addNewUser(newUser);

		// SignUpService.checkFavCategory(regCtrl.user.favMenuCategory)
		// 	.then( function(result) {
		// 		if (result.exists) {
		// 			ngModel.$setValidity('$validCategory', true);
		// 		} else {
		// 			ngModel.$setValidity('$validCategory', false);
		// 		}
		// 	});

		
	};
}


// categoryValidation.$inject = ['$q', '$http'];
// function categoryValidation ($q, $http) {
// 	return {
// 		restrict: 'A',
// 		require: 'ngModel',
// 		link: function(scope, elm, attrs, RegistrationController) {
// 			var category = null;
// 			RegistrationController.$asyncValidators.categoryValidation = function (modelValue) {








// 				category = MenuService.getMenuItems(modelValue);
// 				console.log(category);
// 				if (category !== null) {
// 					def.resolve();
// 				} else {
// 					def.reject();
// 				}

// 				return def.promise;
// 			};

// 		}
// 	};

// };



})();