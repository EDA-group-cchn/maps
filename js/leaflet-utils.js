function randNumber(min, max) {
    return Math.random() * (max-min) + min;
}

function randomPoint(bounds) {
    return L.latLng(
        randNumber(bounds.getSouth(), bounds.getNorth()),
        randNumber(bounds.getWest(), bounds.getEast()));
}

function randomMove(latLng) {
    return L.latLng(
        latLng.lat + randNumber(-0.05, 0.05),
        latLng.lng + randNumber(-0.05, 0.05));
}

function latLngToGoogle(latLng) {
    return new google.maps.LatLng(latLng.lat, latLng.lng);
}

function latLngFromGoogle(latLng) {
    return L.latLng(latLng.lat(), latLng.lng());
}

function buildMarker(point, icon, move) {
    var marker;
    if (move) {
        marker = L.animatedMarker([point], { icon: icon, autoStart: false });
    } else {
        marker = L.marker(point, { icon: icon });
    }
    return marker;
}
