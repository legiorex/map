// Core
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { history } from '../init/middleware/core';

// Reducers
import { mapReducer as map } from '../bus/map/reducer';


export const rootReducer = combineReducers({
  map,
  router: connectRouter(history),
});
