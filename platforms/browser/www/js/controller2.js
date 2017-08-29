

  // RESTAURANTLIST CONTROLLER
    app.controller('restaurantlistController', function ($scope, $rootScope, restaurantsFactory,position,GreatCircle) {
        "use strict";
	    $scope.restaurantList = restaurantsFactory.getRestaurants(); //call to restaurantfactory
	    $scope.position = position;
	    
	    $scope.distanceTo = function(restaurant) {
      var distance = GreatCircle.distance( restaurant.long,restaurant.lat, position.longitude, position.latitude)
      restaurant.distance = distance;
      distance = distance.toFixed(1);
      return distance;
    };
    		$scope.totalDisplayed = 2; // implementing a load more capability
		$scope.loadMore = function () {
			$scope.totalDisplayed += 20;  
		};
    })


    .factory('position', function( $rootScope ){
      
        console.log('building position')
      
        var position = {};
      
          // 1ST / AUTO GEOLOCATION OF USER 
          // displays a popup to indicate current user location - (disabled)
          // onSuccess Callback - This method accepts a Position object, which contains the current GPS coordinates
         var onSuccess = function(position2) {
             
              console.log(position2.coords.latitude )
              console.log(position2.coords.longitude)
              
              position.latitude = 20.697720300000004;
              position.longitude = -103.2757182;
              
              $rootScope.$digest()
          };

        function onError(error) { // onError Callback receives a PositionError object
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        
      return position;
      
    })

