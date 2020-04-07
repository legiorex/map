// Core
import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Components
import ListMarkers from '../ListMarkers';
import { genId, generateColor } from 'Instruments/helper';

import { addPlacemark } from 'Instruments';

// Actions
import { markersActions } from 'Bus/markers/actions';

import style from './style.module.css';

export const Dashboard = () => {

  const dispatch = useDispatch();

  const [titleMarker, setTitleMarker] = useState('');
  const [count, setCount] = useState(0);
  const center = [55.72, 37.64];

  const addPoint = useCallback((balloonContent) => {

    setCount(count + 1);
    const color = generateColor();

    addPlacemark(
      center,
      balloonContent,
      count + 1,
      count,
      color,
    );

    dispatch(markersActions.createMarker({
      markerId:    genId(),
      markerIndex: count,
      titleMarker,
      color,
    }));

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
        count = { count }
        setCount = { setCount }
      />
    </div>
  );
};

export default Dashboard;
