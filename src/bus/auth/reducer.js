// Types
import { types } from './types';
const initialState = {
  isAuthenticated: false,
  isInitialized:   false,
};

export const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.AUTHENTICATE:

      return Object.assign({}, state, {
        isAuthenticated: true,
      });

    case types.INITIALIZE:

      return Object.assign({}, state, {
        isInitialized: true,
      });
      // case types.LOGOUT:

    //   return state.set('isAuthenticated', false);
    default:
      return state;
  }
};
