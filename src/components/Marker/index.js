// Core
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

// Actions
import { markersActions } from 'Bus/markers/actions';
import { removePlacemark } from 'Instruments';

import style from './style.module.css';

const Marker = ({
  markers,
  setCount,
  count,
  markerId,
  // placemark,
  titleMarker,
  indexMarker,
  color,
}) => {
  const dispatch = useDispatch();
  // const map = useSelector((state) => state.map.get('map'));
  // const polyline = useSelector((state) => state.polyline.get('polyline'));

  const removeMarker = useCallback(() => {

    setCount(count - 1);
    // polyline.geometry.splice(indexMarker, 1);
    // map.geoObjects.splice(indexMarker, 1);
    // placemark.geometry.events.remove('change');

    // map.geoObjects.each((item, index) => {

    //   item.properties.set({ iconContent: index + 1 });

    // });
    removePlacemark(indexMarker);
    dispatch(markersActions.removeMarker(markerId));

  }, [count, markers]);

  return (
    <Draggable
      draggableId = { markerId }
      index = { indexMarker }>
      {
        (provided, snapshot) => (

          <div
            { ...provided.draggableProps }
            { ...provided.dragHandleProps }
            className = { style.itemMarker }
            ref = { provided.innerRef }>
            <div
              className = { style.indexBlock }
              style = { { backgroundColor: color } }>
              {indexMarker + 1 }
            </div>
            <h2 className = { style.title }>{titleMarker}</h2>
            <div
              className = { style.buttonRemove }
              onClick = { removeMarker }
            />
          </div>

        )
      }

    </Draggable>
  );

};

export default Marker;
