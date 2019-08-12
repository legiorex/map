// Types
import { types } from './types';

export const usersActions = {
  // Sync
  fillUsers: (usersList) => {

    return {
      type:    types.FILL_USERS,
      payload: usersList,
    };
  },

  // Async
  fillUsersAsync: (name) => {
    return {
      type:    types.FILL_USERS_ASYNC,
      payload: name,
    };
  },
};
