// Core
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import { ListMarkers } from '../ListMarkers';

// Actions
import { markersActions } from '../../bus/markers/actions';

export const Dashboard = () => {
  const mapApi = useSelector((state) => state.map.get('mapApi'));
  const map = useSelector((state) => state.map.get('map'));
  const polyline = useSelector((state) => state.polyline.get('polyline'));

  const dispatch = useDispatch();

  const [titleMarker, setTitleMarker] = useState('');
  const [count, setCount] = useState(0);

  const center = [55.72, 37.64];

  const addPoint = (balloonContent) => {
    if (!polyline) {

      return null;
    }
    setCount(count + 1);

    const placemark = new mapApi.Placemark(
      center,
      {
        iconContent: count + 1,
        balloonContent,
      },
      {
        draggable: true,

      }
    );

    map.geoObjects.add(placemark);

    polyline.geometry.set(count, placemark.geometry.getCoordinates());

    placemark.geometry.events.add('change', (e) => {
      const newCoords = e.get('newCoordinates');

      polyline.geometry.set(count, newCoords);

    });

  };

  const createdMarker = (event) => {

    if (titleMarker === '') {
      event.preventDefault();
    } else {
      event.preventDefault();
      addPoint(titleMarker);
      dispatch(markersActions.createMarker(titleMarker));
    }

  };
  const handleChange = (event) => {
    event.preventDefault();
    setTitleMarker(event.target.value);
  };

  return (
    <div>
      <form >
        <div>Dashboard</div>
        <input type = 'text' value = { titleMarker } onChange = { handleChange } />
        <button type = 'submit' onClick = { createdMarker }>Создать маркер</button>
      </form>
      <ListMarkers />
    </div>
  );
};

export default Dashboard;
