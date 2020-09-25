import { all } from 'redux-saga/effects';
import userSagas from './user';
import gearSagas from './gear';
import authSagas from './auth';

export default function* rootSaga() {
  yield all([...userSagas, ...gearSagas, ...authSagas]);
}
