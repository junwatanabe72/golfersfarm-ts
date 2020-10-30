import { call, put, takeLatest, all } from 'redux-saga/effects';
import { ACTIONTYPES } from '../actions/index';
import { toast } from 'react-toastify';
import { options } from '../utils/Toastify';
import { push } from 'connected-react-router';
import { sendMessageAxios } from '../services/axios/contact';

function* sendMessageAsync(action: Action<ContactType>) {
  const data = yield call(sendMessageAxios, action.payload);
  try {
    yield toast.success(`${data.message}`, options);
    yield put(push('/'));
    return;
  } catch (e) {
    yield toast.error(`失敗しました。もう一度お送りください。`, options);
    return { e };
  }
}

export function* contactSagas() {
  yield all([yield takeLatest(ACTIONTYPES.SEND_MESSAGE, sendMessageAsync)]);
}
