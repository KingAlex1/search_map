/* global ymaps */

window.onload = function () {
    ymaps.ready(init);


    function init() {
        myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9,
            controls: ['zoomControl']
        })
    }
}

let myMap;
let placemarkArray = [];
let ploliLineArray = []
let coordArr = []
let myPolyline;

// export function geocode(address) {
//     return ymaps.geocode(address).then(result => {
//         const points = result.geoObjects.toArray()
//         if (points.length) {
//
//             return points[0].geometry.getCoordinates()
//         }
//     })
// }

export function setPlaceMarks(address, id) {
   return ymaps.geocode(address, {results: 1})
        .then(
            function (res) {
                let firstGeoObject = res.geoObjects.get(0)

                if (firstGeoObject) {
                    console.log('dddd')
                    let coords = firstGeoObject.geometry.getCoordinates(),
                        bounds = firstGeoObject.properties.get('boundedBy');


                    firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
                    firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine())
                    myMap.geoObjects.add(firstGeoObject);
                    myMap.setBounds(bounds, {
                        checkZoomRange: true
                    });

                    placemarkArray.push({
                        placemark: firstGeoObject,
                        id: id,
                        coords: coords
                    })
                    return id
                } else {
                    throw new Error('Неверный адрес')
                }

            }
        )
        .then((id) => addPoliline(id))
        .catch((e)=>alert(e.message))
}

function addPoliline(id) {
    coordArr = placemarkArray.map((el) => {
        return el.coords
    })

    myPolyline = new ymaps.Polyline(coordArr, {
        strokeColor: "#000000",
        strokeWidth: 4,
        strokeOpacity: 0.5
    })

    if (id) {
        ploliLineArray.push({
            poliline: myPolyline,
            id: id
        })
    }

    removePoliline();
    myMap.geoObjects.add(myPolyline);

    return id
}

function removePoliline() {
    ploliLineArray.forEach((el) => {
        myMap.geoObjects.remove(el.poliline);
    })

    myMap.geoObjects.remove(myPolyline);
}

export function removePlaceMark(id) {
    let removePlacemark = placemarkArray.filter((item) => item.id === id)

    placemarkArray.forEach((el, i) => {
        if (el.id == id) {
            placemarkArray.splice(i, 1)
        }
    })

    coordArr = placemarkArray.map((el) => {
        return el.coords
    })

    myMap.geoObjects.remove(removePlacemark[0].placemark)
    removePoliline()
    if (placemarkArray.length > 1) {
        addPoliline()
    }
}

