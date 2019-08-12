// Types
import { types } from './types';

export const workspacesActions = {
  // Sync
  fillWorkspaces: (workspaces) => {
    return {
      type:    types.FILL_WORKSPACE,
      payload: workspaces,
    };
  },
};
