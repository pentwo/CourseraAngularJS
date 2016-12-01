(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService)
.factory('UserData', UserData);

SignUpService.$inject = ['ApiPath', 'UserData', 'MenuService'];
function SignUpService (ApiPath, UserData, MenuService) {
	var service = this;


	service.addNewUser = function (user) {
		UserData.push(user);
		UserData.alreadyMember = true;
	};

}

UserData.$inject = [];
function UserData () {
	var alreadyMember = false;
	return [];
}


})();
