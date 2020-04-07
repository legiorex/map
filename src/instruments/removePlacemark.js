export const removePlacemark = (indexMarker) => {
  const { map, polyline } = window;

  polyline.geometry.splice(indexMarker, 1);
  map.geoObjects.splice(indexMarker, 1);

  map.geoObjects.each((item, index) => {

    item.properties.set({ iconContent: index + 1 });

  });

};
