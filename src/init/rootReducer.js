// Core
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { history } from '../init/middleware/core';

// Reducers
import { googleReducer as google } from '../bus/google/reducer';

export const rootReducer = combineReducers({
  google,
  router: connectRouter(history),
});
