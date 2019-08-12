// Types
import { types } from './types';
const initialState = [];

export const departmentsReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.FILL_DEPART:
      return action.payload;

    default:
      return state;
  }
};
