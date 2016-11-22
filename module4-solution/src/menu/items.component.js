(function (){
'use strict';

angular.module('MenuApp')
.component ('menuItems', {
	templateUrl: 'src/menu/templates/items-detail.template.html',
	bindings: {
		items: '<'
	}
});



})();