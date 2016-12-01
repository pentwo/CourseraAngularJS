# Module 5
## Assignment Instructions (General Idea)
Link to assignment Github page:
[fullstack-course5/Assignment-5.md](https://github.com/jhu-ep-coursera/fullstack-course5/blob/master/assignments/assignment5/Assignment-5.md)

## Issues that I faced
### Form validation text
Solve by using nested `ng-if` to show validation text

```html
<div ng-if="regForm.phone.$touched">
	<p ng-if=" regForm.phone.$error.pattern">
		Must be a valid phone number: ####-###-###
	</p>
	<p ng-if="regForm.phone.$error.required">
		This is required.
	</p>
</div>
```

### $asyncValidators
Solve by using `$watch` on custom directive `categoryValidation` and using `$setValidity` to our custom directive.

```javascript
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
```

> Reference 
> 
> * [Remotely Validate Email Using AngularJS and NodeJS](http://junerockwell.com/remotely-validate-email-using-angularjs-and-nodejs/)
> * [Taming Forms in AngularJS 1.3 - yearofmoo.com](https://www.yearofmoo.com/2014/09/taming-forms-in-angularjs-1-3.html#6-0-asynchronous-validation-via-asyncvalidators)

###Data sharing cross route, controllers and services
Solve by using custom factory `UserData` to storage data and iuject into controllers which need it.
> Reference
> 
> * [controller - angularjs passing scope between routes - Stack Overflow](http://stackoverflow.com/questions/31471440/angularjs-passing-scope-between-routes)

###Try to get user's favorite menu item in UserInfo page
At the beginning, I try to inject `menuItem` through ui-routes resolve method. But it doesn't work.
Solve by using storage user's favorite `menuItem` in User's data array right at the time when user sign-up. After that I can retrieve it thought controller and put it into `ng-repeat`.

```javascript
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
```