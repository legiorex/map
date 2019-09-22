// Core
import React, { memo } from 'react';

const Markers = (props) => {
  const { markers } = props;

  return markers.map((item, index) => {
    console.log('item', item);

    return (

      <li key = { index }>
        <div >
          <h2>{item}</h2>
        </div>
      </li>

    );
  });
};
const areEqual = (prevProps, nextProps) => {
console.log('prevProps', prevProps)
console.log('nextProps', nextProps)
  /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
};

export default memo(Markers, areEqual);
