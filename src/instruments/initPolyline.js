export const initPolyline = (center) => {

  const { map } = window;

  ymaps.modules.require(['Polyline']).spread((Polyline) => {

    window.polyline = new Polyline(center);

    // console.log('~: initPolyline -> polyline', polyline);

    map.geoObjects.add(window.polyline);

    // window.polyline = polyline;
  });

};
