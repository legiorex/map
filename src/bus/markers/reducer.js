// Types
import { types } from './types';
const initialState = [];

export const markersReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.CREATE_MARKER:
      const newState = state.concat(action.payload);

      console.log('newState', newState)

      return newState;

    default:
      return state;
  }
};
