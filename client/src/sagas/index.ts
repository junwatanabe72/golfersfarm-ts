import { all, fork } from 'redux-saga/effects';
import { userSagas } from './user';
import { clubSagas } from './club';
import { ballSagas } from './ball';
import { authSagas } from './auth';

export default function* rootSaga() {
  yield all([fork(authSagas), fork(userSagas), fork(clubSagas), fork(ballSagas)]);
}
