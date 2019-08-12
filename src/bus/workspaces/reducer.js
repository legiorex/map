// Types
import { types } from './types';
const initialState = [];

export const workspacesReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.FILL_WORKSPACE:
      return state.concat(action.payload);

    default:
      return state;
  }
};
