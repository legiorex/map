//Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../api';
// import { uiActions } from '../../../ui/actions';
import { authActions } from '../../../auth/actions';
import { profileActions } from '../../../profile/actions';
import { workspacesActions } from '../../../workspaces/actions';

export function* authenticate () {

  try {

    const getMe = yield apply(api, api.profile.getMe);
    const profile = yield apply(getMe, getMe.json);

    const getWorkSpaces = yield apply(api, api.workspaces.getWorkSpaces);
    const workspaces = yield apply(getWorkSpaces, getWorkSpaces.json);

    if (getMe.status !== 200) {
      if (getMe.status === 403) {
        yield apply(localStorage, localStorage.removeItem, ['token']);
        yield apply(localStorage, localStorage.removeItem, ['remember']);

        return null;
      }
      throw new Error(getMe.message);
    }

    yield put(profileActions.fillProfile(profile));
    yield put(workspacesActions.fillWorkspaces(workspaces));

    yield put(authActions.authenticate());
  } catch (error) {

    // yield put(uiActions.emitError(error, 'authenticate worker'));

  } finally {
    // yield put(uiActions.stopFetching());
    yield put(authActions.initialize());
  }

}
