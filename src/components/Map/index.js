// Core
import React, { useState, useRef, useEffect } from 'react';
import { YMaps, Map as YandexMap } from 'react-yandex-maps';
import { useSelector, useDispatch } from 'react-redux';

import Styles from './styles.module.css';

// Actions
import { mapActions } from '../../bus/map/actions';
import { polylineActions } from '../../bus/polyline/actions';

const Map = () => {
  const dispatch = useDispatch();

  const mapApi = useSelector((state) => state.map.get('mapApi'));
  const polyline = useSelector((state) => state.polyline.get('polyline'));

  const center = [55.72, 37.64];
  const mapState = { center, zoom: 10 };

  const [count, setCount] = useState(0);
  // const [mapApi, setMapApi] = useState(null);
  // const [polyline, setPolyline] = useState(null);
  const mapRef = useRef(null);
  const map = mapRef.current;

  useEffect(() => {

    if (mapApi) {
      const initPolyline = new mapApi.Polyline(center);

      dispatch(polylineActions.createPolyline(initPolyline));

      map.geoObjects.add(initPolyline);

    }

  }, [mapApi]);
  // const addPoint = () => {

  //   if (!polyline) {

  //     return null;
  //   }

  //   setCount(count + 1);

  //   const placemark = new mapApi.Placemark(center, { iconContent: count + 1 }, { draggable: true });

  //   map.geoObjects.add(placemark);

  //   polyline.geometry.set(count, placemark.geometry.getCoordinates());

  //   placemark.geometry.events.add('change', (e) => {
  //     const newCoords = e.get('newCoordinates');

  //     polyline.geometry.set(count, newCoords);

  //   });

  // };

  const getMapApi = (ymaps) => {
    // setMapApi(ymaps);
    dispatch(mapActions.getMapApi(ymaps));
    dispatch(mapActions.getMapRef(mapRef.current));
  };

  return (
    <>
      {/* <div>map</div>
      <button onClick = { addPoint }>Click me</button> */}
      <YMaps >
        <YandexMap
          modules = { ['geoObject.addon.balloon', 'Placemark', 'Polyline'] }
          state = { mapState }
          onLoad = { (ymaps) => getMapApi(ymaps) }
          instanceRef = { mapRef }
          className = { Styles.map }
        />
      </YMaps>
    </>

  );
};

export default Map;
