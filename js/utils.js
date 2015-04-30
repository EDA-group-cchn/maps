function randNumber(min, max) {
    return Math.random() * (max-min) + min;
}

function randomPoint(bounds) {
    return {
        lat: randNumber(bounds.getSouth(), bounds.getNorth()),
        lng: randNumber(bounds.getWest(), bounds.getEast())
    };
}

function randomMove(latLng) {
    return {
        lat: latLng.lat + randNumber(-0.05, 0.05),
        lng: latLng.lng + randNumber(-0.05, 0.05)
    };
}
