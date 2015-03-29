function initialize() {
    var mapOptions = {
        center: {lat: -16.38, lng: -71.53},
        zoom: 14
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);