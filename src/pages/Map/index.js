// Core
import React from 'react';

// Components
import Dashboard from 'Components/Dashboard';
import Map from 'Components/Map';

import style from './style.module.css';

const Maps = () => {
  return (
    <>
      <div className = { style.wrapper } >
        <Dashboard />
        <Map />
      </div>
    </>
  );
};

export default Maps;
