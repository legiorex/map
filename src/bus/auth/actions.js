// Types
import { types } from './types';

export const authActions = {
  // Sync
  authenticate: () => {
    return {
      type: types.AUTHENTICATE,
    };
  },
  initialize: () => {
    return {
      type: types.INITIALIZE,
    };
  },
  remember: (check) => {
    return {
      type:    types.REMEMBER,
      payload: check,
    };
  },
  //   logout: () => {
  //     return {
  //       type: types.LOGOUT,
  //     };
  //   },
  // Async
  googleInit: () => {
    return {
      type: types.GOOGLE_INIT,
    };
  },
  signupAsync: (jwt) => {
    return {
      type:    types.SIGNUP_ASYNC,
      payload: jwt,
    };
  },
  //   loginAsync: (userLogin) => {
  //     return {
  //       type:    types.LOGIN_ASYNC,
  //       payload: userLogin,
  //     };
  //   },
  authenticateAsync: () => {
    return {
      type: types.AUTHENTICATE_ASYNC,
    };
  },
  initializeAsync: () => {
    return {
      type: types.INITIALIZE_ASYNC,
    };
  },
  //   logoutAsync: () => {
  //     return {
  //       type: types.LOGOUT_ASYNC,
  //     };
  //   },

};
