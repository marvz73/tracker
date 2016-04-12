
angular.module('tracker', ['ui.router', 'ngMap'])

.run(function($rootScope, $urlRouter, $state, $timeout, $location, NgMap) {

	$rootScope.isClosing = false;
	$rootScope.isClosing = $location.$$url == '/' ? false : true;
	$timeout(function(){
	    $rootScope.$on('$locationChangeSuccess', function(evt) {
    		console.log($location.$$url)
	    	$rootScope.isClosing = $location.$$url == '/' ? false : true;
	    });
    });

	//Geolocation and set map center
	NgMap.getMap().then(function(map) {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {

				var pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};

				$rootScope.$apply(function(){
					map.setCenter(pos);
				})

			}, function() {
				handleLocationError(true, map.getCenter());
			});
		} 
		else 
		{
			alert("Browser doesn't support Geolocation");
		}
	});

})

.config(function($stateProvider, $urlRouterProvider) {
  
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");

  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      controller: 'HomeCtrl'
    })
    .state('location', {
      url: "/location",
      templateUrl: "partials/tmpl-location.html"
    })
    .state('speed', {
      url: "/speed",
      templateUrl: "partials/tmpl-speed.html"
    })
    .state('fuel', {
      url: "/fuel",
      templateUrl: "partials/tmpl-fuel.html"
    })
    .state('notification', {
      url: "/notification",
      templateUrl: "partials/tmpl-notification.html",
      controller: 'LocationCtrl'
    })


    //
    //GLOBAL
    .state('search', {
      url: "/search",
      templateUrl: "partials/tmpl-search.html"
    })
    .state('globalNotification', {
      url: "/global-notification",
      templateUrl: "partials/tmpl-global-notification.html"
    })
    .state('routes', {
      url: "/routes",
      templateUrl: "partials/tmpl-map-route.html"
    })
    .state('zones', {
      url: "/zones",
      templateUrl: "partials/tmpl-exclusionzone.html"
    })
    .state('filter', {
      url: "/filter",
      templateUrl: "partials/tmpl-mapfilter.html"
    });

    // .state('state1.list', {
    //   url: "/list",
    //   templateUrl: "partials/state1.list.html",
    //   controller: function($scope) {
    //     $scope.items = ["A", "List", "Of", "Items"];
    //   }
    // })
    // .state('state2', {
    //   url: "/state2",
    //   templateUrl: "partials/state2.html"
    // })
    // .state('state2.list', {
    //   url: "/list",
    //   templateUrl: "partials/state2.list.html",
    //   controller: function($scope) {
    //     $scope.things = ["A", "Set", "Of", "Things"];
    //   }
    // });

	


})

.controller('HomeCtrl', function($scope, NgMap, $state) {

	$scope.showDetails = function(){
		$state.go('location');
	}

})

.controller('LocationCtrl', function($scope, NgMap) {

})
