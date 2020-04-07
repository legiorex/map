// Core
import React, { useEffect } from 'react';

import style from './style.module.css';

// Instruments
import { loadScript, yandexMap } from 'Instruments/helper';

const center = [55.72, 37.64];
const zoom = 10;

const init = () => {
  window.map = new window.ymaps.Map('map', {
    center,
    zoom,
    controls: [],

  });
  ymaps.modules.require(['Polyline']).spread((Polyline) => {

    window.polyline = new Polyline(center);

    window.map.geoObjects.add(window.polyline);

  });

};

const Map = () => {

  useEffect(() => {
    loadScript(yandexMap, () => {
      window.ymaps.ready(init);
    });

  }, []);

  return (
    <>
      <div className = { style.map } id = 'map' />
    </>

  );
};

export default Map;
