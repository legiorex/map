// Core
import React, { useRef } from 'react';
import { YMaps, Map as YandexMap } from 'react-yandex-maps';
import { useDispatch } from 'react-redux';

import style from './style.module.css';

// Actions
import { mapActions } from 'Bus/map/actions';
// import { polylineActions } from 'Bus/polyline/actions';

const Map = () => {
  const dispatch = useDispatch();

  // const mapApi = useSelector((state) => state.map.get('mapApi'));
  // const polyline = useSelector((state) => state.polyline.get('polyline'));

  const center = [55.72, 37.64];
  const mapState = { center, zoom: 10 };
  const mapRef = useRef(null);

  const getMapApi = (ymaps) => {
    // setMapApi(ymaps);
    // setMap(mapRef.current);
    dispatch(mapActions.getMapApi(ymaps));
    dispatch(mapActions.getMapRef(mapRef.current));
  };

  return (
    <>
      <YMaps >
        <YandexMap
          modules = { ['geoObject.addon.balloon', 'Placemark', 'Polyline'] }
          state = { mapState }
          onLoad = { (ymaps) => getMapApi(ymaps) }
          instanceRef = { mapRef }
          className = { style.map }
        />
      </YMaps>
    </>

  );
};

export default Map;
