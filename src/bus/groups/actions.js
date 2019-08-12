// Types
import { types } from './types';

export const groupsActions = {
  // Sync
  fillGroups: (groupsList) => {

    return {
      type:    types.FILL_GROUPS,
      payload: groupsList,
    };
  },

  // Async
  fillGroupsAsync: (workspaceId) => {

    return {
      type:    types.FILL_GROUPS_ASYNC,
      payload: workspaceId,
    };
  },
};
