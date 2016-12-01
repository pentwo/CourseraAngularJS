(function () {
'use strict';
angular.module('public')
.controller('UserInfoController', UserInfoController)


UserInfoController.$inject = ['SignUpService', 'UserData', ];
function UserInfoController (SignUpService, UserData) {
	var userCtrl = this;
	userCtrl.user = UserData[0];
	userCtrl.userExist = UserData.alreadyMember;

};



})();