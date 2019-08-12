// Types
import { types } from './types';

export const departmentsActions = {
  // Sync
  fillDepart: (departList) => {

    return {
      type:    types.FILL_DEPART,
      payload: departList,
    };
  },

  // Async
  fillDepartAsync: (workspaceId) => {
    

    return {
      type:    types.FILL_DEPART_ASYNC,
      payload: workspaceId,
    };
  },
};
