// Core
import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import ListMarkers from '../ListMarkers';
import { genId, generateColor } from 'Instruments/helper';

import { addPlacemark } from 'Instruments';

// Actions
import { markersActions } from 'Bus/markers/actions';

import style from './style.module.css';

export const Dashboard = () => {
  // const mapApi = useSelector((state) => state.map.get('mapApi'));
  // const map = useSelector((state) => state.map.get('map'));
  // const polyline = useSelector((state) => state.polyline.get('polyline'));

  const dispatch = useDispatch();

  const [titleMarker, setTitleMarker] = useState('');
  const [count, setCount] = useState(0);
  const center = [55.72, 37.64];

  // const changePolyline = useCallback((placemark) => {

  //   if (!count && polyline.geometry.getLength() === 2) {
  //     polyline.geometry.remove(1);
  //   }

  //   placemark.geometry.events.add('change', (e) => {

  //     const indexOf = map.geoObjects.indexOf(placemark);

  //     const newCoords = e.get('newCoordinates');

  //     polyline.geometry.set(indexOf, newCoords);

  //   });

  // }, [mapApi, map, polyline, count, setCount]);

  const addPoint = useCallback((balloonContent) => {

    // console.log('~: Dashboard -> polyline', polyline);

    // if (!polyline) {

    //   return null;
    // }
    setCount(count + 1);
    const color = generateColor();
    // const placemark = new mapApi.Placemark(

    //   center,
    //   {
    //     iconContent: count + 1,
    //     balloonContent,
    //     index:       count,
    //   },
    //   {
    //     draggable: true,
    //     iconColor: color,
    //   }
    // );

    // map.geoObjects.add(placemark, count);
    // polyline.geometry.set(count, placemark.geometry.getCoordinates());
    if (window.map) {

      addPlacemark(
        center,
        balloonContent,
        count + 1,
        count,
        color,
      );
    }

    dispatch(markersActions.createMarker({
      markerId:    genId(),
      markerIndex: count,
      titleMarker,
      color,
    }));

    // changePolyline(placemark);
    setTitleMarker('');
  }, [count, titleMarker, window.map]);

  const createdMarker = (event) => {

    if (titleMarker === '') {
      event.preventDefault();
    } else {
      event.preventDefault();
      addPoint(titleMarker);
    }

  };

  const handleChange = (event) => {
    event.preventDefault();
    setTitleMarker(event.target.value);
  };

  return (
    <div className = { style.dashboard }>
      <form
        className = { style.dashboardForm }
        onSubmit = { createdMarker }>
        <input
          className = { style.inputTitleMarker }
          placeholder = { 'Введите название метки' }
          type = 'text'
          value = { titleMarker }
          onChange = { handleChange }
        />
      </form>
      <ListMarkers
        // changePolyline = { changePolyline }
        count = { count }
        // map = { map }
        // mapApi = { mapApi }
        // polyline = { polyline }
        setCount = { setCount }
      />
    </div>
  );
};

export default Dashboard;
