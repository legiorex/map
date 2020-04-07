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
import { loadScript, newScript } from 'Instruments/helper';

const center = [55.72, 37.64];
const zoom = 10;

// const loadScript = (src, onLoad) => {
//   const script = document.createElement('script');

//   script.src = src;
//   script.async = true;
//   document.body.appendChild(script);
//   script.onload = onLoad;
// };

const init = () => {
  window.map = new window.ymaps.Map('map', {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.76, 37.64],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom:   7,
  });

};

const Map = ({ status, setMap, map }) => {
  const dispatch = useDispatch();
  const [isMapApi, setIsMapApi] = useState(false);
  const [loadMap, setLoadMap] = useState(false);

  // const map = useSelector((state) => state.map.get('map'));
  // const mapApi = useSelector((state) => state.map.get('mapApi'));
  // const polyline = useSelector((state) => state.polyline.get('polyline'));

  // const center = [55.72, 37.64];

  // window.onload = () => {
  //   console.log('~: Map 33333', window.map);
  //   if (window.ymaps) {
  //     setIsMapApi(true);
  //     // renderMap(testRef.current, center, zoom);
  //   }
  // };
  const mapState = { center, zoom: 10 };
  const mapRef = useRef(null);
  const testRef = useRef(null);

  const getMapApi = (ymaps) => {
    // setMapApi(ymaps);
    // setMap(mapRef.current);
    // dispatch(mapActions.getMapApi(ymaps));
    dispatch(mapActions.getMapRef(mapRef.current));
  };

  // useEffect(() => {

  //   // initMap(testRef.current, center, zoom);
  //   if (window.ymaps) {
  //     setMap(renderMap(testRef.current, center, zoom));
  //     // renderMap(testRef.current, center, zoom);
  //   }

  // }, [window.ymaps]);

  useEffect(() => {
    loadScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU', () => {
      setLoadMap(true);
      window.ymaps.ready(init);
    });

  }, []);

  useEffect(() => {

    if (loadMap) {
      console.log('object');
      initPolyline(center);
    }

  }, [loadMap]);

  // const test = useCallback(() => {

  //   console.log('~: test -> testRef.current', testRef.current);
  //   if (testRef.current) {
  //     // renderMap(testRef.current, center, zoom);
  //     console.log('object');
  //   }
  // }, [testRef]);

  return (
    <>
      {/* <YMaps >
        <YandexMap
          className = { style.map }
          instanceRef = { mapRef }
          // onLoad = { (ymaps) => getMapApi(ymaps) }
          modules = { ['geoObject.addon.balloon', 'Placemark', 'Polyline'] }
          state = { mapState }
        />
      </YMaps> */}

      <div className = { style.map } id = 'map' ref = { testRef } />
    </>

  );
};

export default Map;
