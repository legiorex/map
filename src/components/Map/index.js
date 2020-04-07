// Core
import React, { useRef, useEffect, useCallback, useState } from 'react';
import { YMaps, Map as YandexMap } from 'react-yandex-maps';
import { useDispatch, useSelector } from 'react-redux';

import style from './style.module.css';

// Actions
import { mapActions } from 'Bus/map/actions';
// import { polylineActions } from 'Bus/polyline/actions';

// Instruments
import { renderMap, initPolyline, initMap } from 'Instruments';
import { loadScript, newScript, yandexMap } from 'Instruments/helper';

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
