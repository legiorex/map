//Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../api';
import { groupsActions } from '../../../groups/actions';

export function* getGroups ({ payload: workspaceId }) {

  try {
    // yield console.log('getDepart', workspaceId);
    const response = yield apply(api, api.groups.getGroups, [workspaceId]);

    const groupsList = yield apply(response, response.json);
// console.log('groupsList', groupsList)
    if (response.status !== 200) {

      throw new Error(response.message);
    }

    yield put(groupsActions.fillGroups(groupsList));
  } catch (error) {
    console.log('error', error);
    // yield put(uiActions.emitError(error, 'authenticate worker'));

  }

}
