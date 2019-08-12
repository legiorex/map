// Types
import { types } from './types';
const initialState = [];

export const groupsReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.FILL_GROUPS:
      return action.payload;

    default:
      return state;
  }
};
