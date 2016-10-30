(function () {
	'use strict';

	angular.module('LunchChecker', [])
		   .controller ('LunchCheckController', LunchCheckController);
	
	LunchCheckController.$injector = ['$scopt', '$filter'];
	function LunchCheckController ($scope, $filter) {
		$scope.lunchList = "";
		$scope.feedbackMessage = "";

		$scope.checkLunch = function () {
			var lunchItems = [];
			var dishesNumber = 0;
			var emptyItem = 0;
			lunchItems = $scope.lunchList.split(",");

			for (var i = 0; i < lunchItems.length; i++) {
				if (lunchItems[i] === "") {
					emptyItem ++;
				} else {
					dishesNumber ++;
				};
			};

			if (dishesNumber === 0) {
				$scope.feedbackMessage = "Please enter data first";
				$scope.feedbackStyle = {color:'red'};
				$scope.inputStyle = {border:'1px solid #ff0000'};
			} else if (dishesNumber < 4) {
				$scope.feedbackMessage = "Enjoy!";
				$scope.feedbackStyle = {color:'green'};
				$scope.inputStyle = {border:'1px solid #00ff00'};
			} else {
				$scope.feedbackMessage = "Too much!";
				$scope.feedbackStyle = {color:'green'};
				$scope.inputStyle = {border:'1px solid #00ff00'};
			};

			if (emptyItem > 0) {
				$scope.feedbackMessage += " (Empty item is not considered.)";
			};	

			if ($scope.lunchList == "") {
				$scope.feedbackMessage = "Please enter data first";
				$scope.feedbackStyle = {color:'red'};
				$scope.inputStyle = {border:'1px solid #ff0000'};
			};				
		};
	};
})();