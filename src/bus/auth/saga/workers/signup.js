//Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../api';

// Actions
import { authActions } from '../../../auth/actions';
// import { uiActions } from '../../../ui/actions';
import { profileActions } from '../../../profile/actions';
import { workspacesActions } from '../../../workspaces/actions';

export function* signup ({ payload: jwt }) {

  try {

    const response = yield apply(api, api.auth.signup, [jwt]);

    const { account, token, workspaces } = yield apply(response, response.json);
    // const test = yield apply(response, response.json);

    if (response.status !== 200) {
      throw new Error(console.log('error'));
    }
    yield apply(localStorage, localStorage.setItem, ['token', token]);

    yield put(profileActions.fillProfile(account));
    yield put(workspacesActions.fillWorkspaces(workspaces));
    yield put(authActions.authenticate());

  } catch (error) {
    console.log('object');
    // yield put(uiActions.emitError(error, 'authenticate worker'));

  }
  //   finally {
  //     yield put(uiActions.stopFetching());
  //     yield put(authActions.initialize());
  //   }

}
