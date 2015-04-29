function buildIcon(name) {
    return L.icon({
        iconUrl: 'icons/' + name + '.png',
        iconSize: [40, 40]
    });
}

function buildMarker(point, icon) {
    return L.marker(point, {
        icon: icon
    });
}

function loadPoints(map, description) {
    for (var type in description) {
        var current = description[type];
        current.icon = buildIcon(type);
        current.markers = [];
        for (var i = 0; i < current.quantity; ++i) {
            var marker = buildMarker(
                randomPoint(map.getBounds()), current.icon);
            current.markers.push(marker);
            marker.addTo(map);
        }
        if (current.move) {
            for (var i = 0; i < current.markers.length; ++i) {
                setInterval(function (marker) {
                    marker.setLatLng(
                        randomMove(marker.getLatLng())
                    )
                }, 1000, current.markers[i]);
            }
        }
    }
}

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

    var description = {
        bus: { quantity: 5, move: true },
        person: { quantity: 20, move: false },
        stop: { quantity: 5, move: false }
    };
    loadPoints(map, description);
}

document.addEventListener('DOMContentLoaded', initialize);
