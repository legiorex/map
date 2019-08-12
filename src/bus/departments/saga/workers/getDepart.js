//Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../api';
import { departmentsActions } from '../../../departments/actions';

export function* getDepart ({ payload: workspaceId }) {

  try {
    // yield console.log('getDepart', workspaceId);
    const response = yield apply(api, api.departments.getDepartments, [workspaceId]);


    const departList = yield apply(response, response.json);


    if (response.status !== 200) {

      throw new Error(response.message);
    }

    yield put(departmentsActions.fillDepart(departList));
  } catch (error) {
    console.log('error', error);
    // yield put(uiActions.emitError(error, 'authenticate worker'));

  }

}
