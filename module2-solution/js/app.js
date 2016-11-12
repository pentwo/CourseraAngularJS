(function (){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller ('ToBuyController', ToBuyController)
.controller ('AlreadyBoughtController', AlreadyBoughtController)
.service ('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService){
	var itemToBuy = this;
	// get item list
	itemToBuy.items = ShoppingListCheckOffService.getItems();

	// call service function to throw item to bought item list
	itemToBuy.bought = function (itemIndex) {
		ShoppingListCheckOffService.actionBought(itemIndex);
	};

};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService){
	var itemBought = this;

	// get bought item list
	itemBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
};



function ShoppingListCheckOffService () { 
	var service = this;

	// initial item list
	var items = ["10 cookies","10 chips","5 soft drinks","1 instant coffee","5 bottles of milk",];

	// initial bought item list
	var boughtItems = [];

	// pass item list to controller
  	service.getItems = function () {
    	return items;
  	};

  	// pass bought item list to controller
  	service.getBoughtItems = function () {
  		return boughtItems;
  	};

  	// function to throw item to bought item list
	service.actionBought = function (itemIndex) {
		boughtItems.push(items[itemIndex]);
		items.splice(itemIndex, 1);
	};
};

})();