// Core
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { history } from '../init/middleware/core';

// Reducers
import { markersReducer as markers } from '../bus/markers/reducer';

export const rootReducer = combineReducers({
  markers,
  router: connectRouter(history),
});
