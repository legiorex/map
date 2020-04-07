// Core
import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Dashboard from 'Components/Dashboard';
import Map from 'Components/Map';

const yandexMap = `https://api-maps.yandex.ru/2.1.76/?apikey=${process.env.REACT_APP_YMAP_KEY}&lang=ru_RU&load=Map,Placemark,Polyline,geoObject.addon.balloon`;

// Actions

import { polylineActions } from 'Bus/polyline/actions';
import { mapActions } from 'Bus/map/actions';

// Instruments
import { initMap } from 'Instruments';
import { loadScript, newScript } from 'Instruments/helper';

import style from './style.module.css';
import { async } from 'q';

const center = [55.72, 37.64];
const zoom = 10;

const Maps = () => {
  const dispatch = useDispatch();

  const [status, setStatus] = useState(false);
  const [map, setMap] = useState(null);

  console.log('~: Maps -> map', map);

  const myScript =  newScript(yandexMap);

  const doLoad = () => {
    myScript.then(() => {

      window.ymaps.ready();
      setStatus(true);

    }).catch(() => {
      setStatus(false);

      console.log('init Error');
    });
  };

  // const mapApi = useSelector((state) => state.map.get('mapApi'));

  // const map = useSelector((state) => state.map.get('map'));

  // useEffect(() => {

  //   setTimeout(() => {
  //     doLoad();
  //   }, 2000);

  // }, []);

  // const initYandexMap  = useCallback(() => {
  //   initMap();
  //   console.log('~: Maps -> initMap', 'initMap');
  // }, []);

  // useEffect(() => {

  //   if (mapApi && map) {
  //     const initPolyline = new mapApi.Polyline(center);

  //     dispatch(polylineActions.createPolyline(initPolyline));
  //     map.geoObjects.add(initPolyline);
  //   }

  // }, [mapApi, map]);

  return (
    <>
      <div className = { style.wrapper } >
        <Dashboard />
        <Map
          center = { center }
          // map = { map }
          // setMap = { setMap }
          status = { status }
          zoom = { zoom }
        />
      </div>
    </>
  );
};

export default Maps;
