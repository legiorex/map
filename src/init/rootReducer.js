// Core
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { history } from '../init/middleware/core';

// Reducers
import { reducer as auth } from '../bus/auth/reducer';

export const rootReducer = combineReducers({
    auth,
    router: connectRouter(history),
});
