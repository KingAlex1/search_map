/* global ymaps */


ymaps.ready(init);

let myMap;

export function geocode(address) {
    return ymaps.geocode(address).then(result => {
        const points = result.geoObjects.toArray();

        if (points.length) {
            return points[0].geometry.getCoordinates()
        }
    })
}


function init() {
    myMap = new ymaps.Map('map', {
        center: [55.751574, 37.573856],
        zoom: 9,
        controls: ['zoomControl']
    })
}

export function setPlaceMarks(address) {
    ymaps.geocode(address, {results: 1}).then(
        function (res) {
            var firstGeoObject = res.geoObjects.get(0),
                coords = firstGeoObject.geometry.getCoordinates(),
                bounds = firstGeoObject.properties.get('boundedBy');

            firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
            firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine())
            myMap.geoObjects.add(firstGeoObject);
            myMap.setBounds(bounds, {

                checkZoomRange: true
            });

        }
    )

}