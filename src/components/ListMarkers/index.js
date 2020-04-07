// Core
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Marker from '../Marker';
import style from './style.module.css';

import { updatePoints } from 'Instruments';

const ListMarkers = ({ setCount, count }) => {

  const markers = useSelector((state) => state.markers);

  const onDragEnd = useCallback(({ destination, source }) => {

    updatePoints(destination.index, source.index);

  }, [markers]);

  return (
    <DragDropContext
      onDragEnd = { onDragEnd }>
      <div>
        <Droppable droppableId = { 'droppable' } type = 'MARKER'>
          {(provided) => (
            <div
              className = { style.markers }
              ref = { provided.innerRef }
              { ...provided.droppableProps }>
              {
                markers.map((item, index) =>
                  (
                    <Marker
                      color = { item.color }
                      count = { count }
                      indexMarker = { index }
                      key = { item.markerId }
                      markerId = { item.markerId }
                      setCount = { setCount }
                      titleMarker = { item.titleMarker }
                    />

                  )

                )
              }
              {provided.placeholder}
            </div>
          )

          }

        </Droppable>

      </div>
    </DragDropContext>
  );
};

export default ListMarkers;
