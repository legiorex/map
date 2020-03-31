// Core
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Marker from '../Marker';
import style from './style.module.css';
const ListMarkers = ({
  setCount,
  count,
  polyline,
}) => {

  const markers = useSelector((state) => state.markers);

  const onDragEnd = useCallback(({ destination, source, draggableId }) => {
    console.log('~: markers', markers);

    console.log('~: onDragEnd -> draggableId', draggableId);
    console.log('~: onDragEnd -> source', source);
    // the only one that is required
    console.log('~: onDragEnd -> destination', destination);
    // const currentMarker = markers[source.index];
    // // const dest = markers[destination.index];

    // const test = markers.splice(source.index, 1);

    // test.splice(destination.index, 0, currentMarker);
    // console.log('~: onDragEnd -> test', test);

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
                      polyline = { polyline }
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
