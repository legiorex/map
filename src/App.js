// Core
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

// Components
import Maps from './pages/Maps';

// Actions
import { mapActions } from './bus/map/actions';

const mapStateToProps = (state) => {
  return {
    map: state.map,
  };
};

const mapDispatchToProps = {
  mapScript: mapActions.mapScript,
};

const App = (props) => {
  const { map, mapScript } = props;

  const googleMap = useRef(null);

  const initMap = () => {
    return new map.Map(googleMap.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom:   8,

    });
  };

  useEffect(() => {
    mapScript();
  }, []);

  useEffect(() => {
    console.log('map', map);
    if (map.Map !== void 0) {

      initMap();
    }
  }, [map]);

  return (
    <div>
      <div ref = { googleMap } style = { { width: 3000, height: 3000 } } />
      <Maps />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
