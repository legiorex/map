// Types
import { types } from './types';
const initialState = [];

export const markersReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.CREATE_MARKER:

      return [...state, action.payload];

    case types.REMOVE_MARKER:

      const updateState = state.filter((item) => item.markerId !== action.payload);

      return updateState;

    case types.UPDATE_MARKER:

      const { sourceIndex, destinationIndex } = action.payload;

      const sourceMarker = state[sourceIndex];

      const newArray = [...state];

      newArray.splice(sourceIndex, 1);
      newArray.splice(destinationIndex, 0, sourceMarker);

      return newArray;
    default:
      return state;
  }
};
