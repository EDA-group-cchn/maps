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
     	
		for (var i = 0; i < puntosrandom ; i++) {  
	       	  	var point = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
		           southWest.lng() + lngSpan * Math.random());
	       		 points.push(point);
		       	 var marker = createMarkerPerson(point, i);
		       	 gmarkers.push(marker);
		}
		for (var i = 0; i < puntosrandom ; i++) {  
	       	  	var point = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
		           southWest.lng() + lngSpan * Math.random());
	       		 points.push(point);
		       	 var marker = createMarkerBus(point, i);
		       	 gmarkers.push(marker);
		}

		for (var i = 0; i < puntosrandom ; i++) {  
	       	  	var point = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
		           southWest.lng() + lngSpan * Math.random());
	       		 points.push(point);
		       	 var marker = createMarkerStop(point, i);
		       	 gmarkers.push(marker);
		}

	      	for (var i=0; i < points.length; i++) {
		  	document.getElementById("input_points").innerHTML += i+": "+points[i].toUrlValue()+"<br>";
	      	}
   
    	  });
	}

        function createMarkerPerson(latlng, marker_number) {
          var html = "Persona "+marker_number;
	  var image = 'icons/person.png';
          var marker = new google.maps.Marker({
            position: latlng,
            map: map,
	    icon: image,
            zIndex: Math.round(latlng.lat()*-100000)<<5
          });

          google.maps.event.addListener(marker, 'click', function() {
	  var contentString = html + "<br>"+marker.getPosition().toUrlValue()+"<br><a href='javascript:removeMarker(new google.maps.LatLng("+marker.getPosition().toUrlValue()+"));'>Borrar Persona</a>";
            infowindow.setContent(contentString); 
            infowindow.open(map,marker);
          });
          return marker;
        }

	function createMarkerBus(latlng, marker_number) {
          var html = "Bus "+marker_number;
	  var image = 'icons/bus.png';
          var marker = new google.maps.Marker({
            position: latlng,
            map: map,
	    icon: image,
            zIndex: Math.round(latlng.lat()*-100000)<<5
          });

          google.maps.event.addListener(marker, 'click', function() {
	  var contentString = html + "<br>"+marker.getPosition().toUrlValue()+"<br><a href='javascript:removeMarker(new google.maps.LatLng("+marker.getPosition().toUrlValue()+"));'>Borrar Bus</a>";
            infowindow.setContent(contentString); 
            infowindow.open(map,marker);
          });
          return marker;
        }
 
	function createMarkerStop(latlng, marker_number) {
          var html = "Bus "+marker_number;
	  var image = 'icons/stop.png';
          var marker = new google.maps.Marker({
            position: latlng,
            map: map,
	    icon: image,
            zIndex: Math.round(latlng.lat()*-100000)<<5
          });

          google.maps.event.addListener(marker, 'click', function() {
	  var contentString = html + "<br>"+marker.getPosition().toUrlValue()+"<br><a href='javascript:removeMarker(new google.maps.LatLng("+marker.getPosition().toUrlValue()+"));'>Borrar Stop</a>";
            infowindow.setContent(contentString); 
            infowindow.open(map,marker);
          });
          return marker;
        }
