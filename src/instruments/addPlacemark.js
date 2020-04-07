export const addPlacemark = (...arg) => {

  const [center, balloonContent, iconContent, index, iconColor] = arg;

  const { map, polyline } = window;

  ymaps.modules.require(['Placemark', 'overlay.Placemark']).spread((Placemark) => {

    ymaps.Placemark = Placemark;

    const placemark = new Placemark(

      center,
      {
        iconContent,
        balloonContent,
        index,
      },
      {
        draggable: true,
        iconColor,
      }
    );

    map.geoObjects.add(placemark, index);

    polyline.geometry.set(index, placemark.geometry.getCoordinates());
    const indexOf = map.geoObjects.indexOf(placemark);

    placemark.geometry.events.add('change', (e) => {

      const newCoords = e.get('newCoordinates');

      polyline.geometry.set(indexOf, newCoords);

    });

  });

};
