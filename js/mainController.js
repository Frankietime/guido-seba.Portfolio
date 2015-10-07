var app = angular.module('app');

app.controller('mainController', [ '$scope', function ($scope) {
	$rootScope.data = [
		{
			spanish : [
				{
					'aboutUs': {
						title
					}
				}
			]
		},
		{
			english: [
				{

				}
			]
		}
	]
	$scope.currentLanguage = '';
	// watch route change and get current scope

	$scope.$watch('routeChangeSuccess', function (data) {
		// gets page name
		var currentPage = data.splice();
		$rootScope.pageData = currentPageData(currentPage);
	}	
}]);

/*app.controller('currentPagerController', [ '$scope', function ($scope) {

}]);*/
