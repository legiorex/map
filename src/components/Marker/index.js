// Core
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

// Actions
import { markersActions } from 'Bus/markers/actions';
import { removePlacemark } from 'Instruments';

import style from './style.module.css';

const Marker = ({
  setCount,
  count,
  markerId,
  titleMarker,
  indexMarker,
  color,
}) => {
  const dispatch = useDispatch();

  const removeMarker = useCallback(() => {

    setCount(count - 1);
    removePlacemark(indexMarker);
    dispatch(markersActions.removeMarker(markerId));

  }, [count]);

  return (
    <Draggable
      draggableId = { markerId }
      index = { indexMarker }>
      {
        (provided) => (

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
