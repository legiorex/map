// Types
import { types } from './types';

export const authActions = {
  authenticateAsync: () => {
    return {
      type: types.AUTHENTICATE_ASYNC,
    };
  },
};
