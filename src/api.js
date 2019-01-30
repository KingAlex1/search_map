/* global ymaps */


ymaps.ready(init);

let myMap;
let placemarkArray = [];

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

export function setPlaceMarks(address, id) {
    ymaps.geocode(address, {results: 1}).then(
        function (res) {
            let firstGeoObject = res.geoObjects.get(0),
                coords = firstGeoObject.geometry.getCoordinates(),
                bounds = firstGeoObject.properties.get('boundedBy');


            placemarkArray.push({
                placemark: firstGeoObject,
                id: id
            })
            console.log(placemarkArray.placemark, placemarkArray.id)

            console.log(placemarkArray)
            firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
            firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine())
            myMap.geoObjects.add(firstGeoObject);
            myMap.setBounds(bounds, {

                checkZoomRange: true
            });

        }
    )

}

export function removePlaceMark(id) {
    // console.log(id)
    let removePlacemark = placemarkArray.filter((item) => item.id === id)
    console.log(removePlacemark[0].id, 'dddd')
    alert("Прощай " +  removePlacemark[0].placemark._xalEntities.addressLine)
    myMap.geoObjects.remove(removePlacemark[0].placemark)


}

