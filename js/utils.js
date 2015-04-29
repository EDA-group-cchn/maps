function randNumber(min, max) {
    return Math.random() * (max-min) + min;
}

function randomPoint(bounds) {
    return {
        'lat': randNumber(bounds.getSouth(), bounds.getNorth()),
        'lng': randNumber(bounds.getWest(), bounds.getEast())
    };
}

function randomMove(latLng) {
    latLng.lat += randNumber(-0.002, 0.002);
    latLng.lng += randNumber(-0.002, 0.002);
    return latLng;
}
