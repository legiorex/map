export const addPlacemark = (...arg) => {

  const [center, balloonContent, iconContent, index, iconColor] = arg;

  const { map, polyline } = window;

  console.log('~: addPlacemark -> polyline', polyline);

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

    placemark.geometry.events.add('change', (e) => {
      console.log('~: addPlacemark -> e', e);

      const indexOf = map.geoObjects.indexOf(placemark);

      const newCoords = e.get('newCoordinates');

      polyline.geometry.set(indexOf, newCoords);

    });

  });

};
