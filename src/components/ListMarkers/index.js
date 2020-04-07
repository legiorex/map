// Core
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Marker from '../Marker';
import style from './style.module.css';

// Actions
import { markersActions } from 'Bus/markers/actions';

import { updatePoints } from 'Instruments';

const ListMarkers = ({
  setCount,
  count,
  // polyline,
}) => {
  const dispatch = useDispatch();

  const markers = useSelector((state) => state.markers);

  const onDragEnd = useCallback(({ destination, source, draggableId }) => {

    // dispatch(markersActions.updateMarkers({
    //   sourceIndex:      source.index, destinationIndex: destination.index,
    // }));

    updatePoints(destination.index, source.index);

  }, [markers]);

  return (
    <DragDropContext
      onDragEnd = { onDragEnd }>
      <div>
        <Droppable droppableId = { 'droppable' } type = 'MARKER'>
          {(provided, snapshot) => (
            <div
              className = { style.markers }
              ref = { provided.innerRef }
              // isDraggingOver = { snapshot.isDraggingOver }
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
                      placemark = { item.placemark }
                      // polyline = { polyline }
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
