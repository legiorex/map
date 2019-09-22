// Core
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { history } from '../init/middleware/core';

// Reducers
import { markersReducer as markers } from '../bus/markers/reducer';
import { mapReducer as map } from '../bus/map/reducer';
import { polylineReducer as polyline } from '../bus/polyline/reducer';

export const rootReducer = combineReducers({
  polyline,
  markers,
  map,
  router: connectRouter(history),
});
