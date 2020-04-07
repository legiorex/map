
import { updateArray } from 'Instruments/helper';

export const updatePoints = (destIndex, currentIndex) => {

  const { map, polyline } = window;

  updateArray(map.geoObjects, destIndex, currentIndex);
  updateArray(polyline.geometry, destIndex, currentIndex);

  map.geoObjects.each((item, index) => {

    item.properties.set({ iconContent: index + 1 });

  });

};
