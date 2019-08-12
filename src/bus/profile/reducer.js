// Types
import { types } from './types';
const initialState = {
  id:    '',
  name:  '',
  email: '',
};

export const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.FILL_PROFILE:
      const { id, name, email } = action.payload;

      return Object.assign({}, state, { id, name, email });

    default:
      return state;
  }
};
