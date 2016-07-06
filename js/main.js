	var gmarkers = []; 
    	var points = [];
    	var map = null;


    	var infowindow = new google.maps.InfoWindow({  
        	size: new google.maps.Size(250,150)
     	});
		
	function initialize() {
  		  directionsService = new google.maps.DirectionsService();
			  directionsRenderer = new google.maps.DirectionsRenderer();
		var puntosrandom = document.getElementById("end").value ;		  
        	var myOptions = {
    			center: {lat: -16.38, lng: -71.53},
			zoom: 14
  		  }

        	map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
  			directionsRenderer.setMap(map);

 
 	google.maps.event.addListenerOnce(map, 'bounds_changed', function() {

	     	var bounds = map.getBounds();
	     	var southWest = bounds.getSouthWest();
	     	var northEast = bounds.getNorthEast();
	     	var lngSpan = northEast.lng() - southWest.lng();
	     	var latSpan = northEast.lat() - southWest.lat();
		map.setCenter(map.getCenter());
	     	map.setZoom(map.getZoom()-1);

		var imageP = 'icons/person.png';
		var imageB = 'icons/bus.png';
		var imageS = 'icons/stop.png';
     	
		for (var i = 0; i < puntosrandom ; i++) {  
	       	  	 var point = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
		         southWest.lng() + lngSpan * Math.random());
	       		 points.push(point);
		       	 var marker = createMarker(point, i, imageP);
		       	 gmarkers.push(marker);
		}
		for (var i = 0; i < puntosrandom ; i++) {  
	       	  	 var point = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
		         southWest.lng() + lngSpan * Math.random());
	       		 points.push(point);
		       	 var marker = createMarker(point, i, imageB);
		       	 gmarkers.push(marker);
		}

		for (var i = 0; i < puntosrandom ; i++) {  
	       	  	 var point = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
		         southWest.lng() + lngSpan * Math.random());
	       		 points.push(point);
		       	 var marker = createMarker(point, i,imageB);
		       	 gmarkers.push(marker);
		}

	      	for (var i=0; i < points.length; i++) {
		  	document.getElementById("input_points").innerHTML += i+": "+points[i].toUrlValue()+"<br>";
	      	}
   
    	  });
	}

        function createMarker(latlng, marker_number, image) {
          var marker = new google.maps.Marker({
            position: latlng,
            map: map,
	    icon: image,
          });
          return marker;
        }
