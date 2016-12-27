


var $app = angular.module('responsiveGoogleMap', ['uiGmapgoogle-maps']);

$app.controller('mainController', ['$rootScope', '$scope', '$filter', '$location', '$http',
  function($rootScope, $scope, $filter, $location, $http) {
    
    var idShowing = null;

    $scope.points = [{
      id: 5,
      latitude: 51.23,
      longitude: 4.46,
      showWindow: false,
      title: 'Marker 2'
    }, {
      id: 6,
      latitude: 51.27,
      longitude: 4.42,
      showWindow: false,
      title: 'Marker 2'
    }, {
      id: 12,
      latitude: 51.25,
      longitude: 4.41,
      showWindow: false,
      title: 'Plane'
    }];

    function onMarkerClicked(marker) {
      if (idShowing) {
        var tohide = $filter('filter')($scope.map.markers, {
          id: idShowing
        })[0];
        tohide.showWindow = false;
      }
      idShowing = marker.id;
      /*for (i = 0; i<$scope.map.markers.length;i++){
        $scope.map.markers[i].showWindow = false;
      }*/
      marker.showWindow = true;
      $scope.$apply();
      //window.alert("lat: " + marker.latitude + ", lon: " + marker.longitude + " clicked!!");
    }

    function onMarkerClosed(marker) {
      marker.showWindow = false;
      $scope.$apply();
    }

    //$scope.onMarkerClicked = onMarkerClicked;
    $scope.map = {
      center: {
        latitude: 51.219053,
        longitude: 4.404418
      },
      zoom: 11,
      markers: $scope.points,
      infoWindow: {
	    	pixelOffset: new google.maps.Size(0,0), 
	    	options: {
	    		boxClass: 'custom-info-window'
	    	}
	    }
    };

    _.each($scope.map.markers, function(marker) {
      marker.onClicked = function() {
        onMarkerClicked(marker);
      };
    });
  }
]);