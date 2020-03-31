// Core
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Dashboard from 'Components/Dashboard';
import Map from 'Components/Map';

// Actions
import { polylineActions } from 'Bus/polyline/actions';

import style from './style.module.css';

const center = [55.72, 37.64];

const Maps = () => {
  const dispatch = useDispatch();
  const mapApi = useSelector((state) => state.map.get('mapApi'));

  const map = useSelector((state) => state.map.get('map'));

  useEffect(() => {

    if (mapApi) {
      const initPolyline = new mapApi.Polyline(center);

      dispatch(polylineActions.createPolyline(initPolyline));
      map.geoObjects.add(initPolyline);
    }

  }, [mapApi, map]);

  return (
    <>
      <div className = { style.wrapper }>
        <Dashboard />
        <Map />
      </div>
    </>
  );
};

export default Maps;
