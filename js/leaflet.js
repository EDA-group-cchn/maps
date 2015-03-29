function initialize(event) {
    var mapboxAttribution = '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox © OpenStreetMap</a>';
    var baseLayers = {
        OpenStreetMap: L.tileLayer(
            'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'}),
        MapboxStreet: L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.streets-basic/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IlhHVkZmaW8ifQ.hAMX5hSW-QnTeRCMAy9A8Q&update=i7v26',
            {attribution: mapboxAttribution}),
        MapboxSatellite: L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.streets-satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IlhHVkZmaW8ifQ.hAMX5hSW-QnTeRCMAy9A8Q&update=i7v26',
            {attribution: mapboxAttribution})
    };
    var mapOptions = {
        center: {lat: -16.38, lng: -71.53},
        zoom: 14,
        layers: [baseLayers.OpenStreetMap]
    };
    var map = L.map('map-canvas', mapOptions);
    L.control.layers(baseLayers).addTo(map);
}

document.addEventListener('DOMContentLoaded', initialize);
