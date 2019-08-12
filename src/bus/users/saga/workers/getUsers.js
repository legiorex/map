//Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../api';
import { usersActions } from '../../../users/actions';

export function* getUsers ({ payload: workspaceId }) {

  try {

    const response = yield apply(api, api.users.getUsers, [workspaceId]);

    const usersList = yield apply(response, response.json);

    if (response.status !== 200) {

      throw new Error(response.message);
    }

    yield put(usersActions.fillUsers(usersList));

  } catch (error) {
    console.log('error', error);
    // yield put(uiActions.emitError(error, 'authenticate worker'));

  }

}
