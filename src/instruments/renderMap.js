export const renderMap = (ref, center, zoom) => {

  window.map = new window.ymaps.Map('map', {
    center,
    zoom,
    controls: [],
  });

};
