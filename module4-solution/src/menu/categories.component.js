(function (){
'use strict';

angular.module('MenuApp')
.component ('categoriesItems', {
	templateUrl: 'src/menu/templates/categories-detail.template.html',
	bindings: {
		categories: '<'
	}
});



})();