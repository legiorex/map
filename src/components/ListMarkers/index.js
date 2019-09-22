// Core
import React, { memo, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


const Markers = memo((props) => {
  const { markers } = props;

  return markers.map((item, index) => {
    
    return (

      <li key = { index }>
        <div >
          <h2>{item}</h2>
        </div>
      </li>

    );
  });
});

export const ListMarkers = (props) => {

 
  const markersProps = useSelector(state => state.markers);

  const [markers, setMarkers] = useState(null);

  useEffect(() => {
    setMarkers(markersProps);

  }, [markersProps]);


  return (
    <div>

      <ul>
        { markers ? <Markers markers = { markers } /> : null }
        
      </ul>
      
    </div>
  );
};

