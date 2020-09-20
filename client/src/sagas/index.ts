import { takeLatest, all } from 'redux-saga/effects';
import { ACTIONTYPES } from '../actions/index';
import {
  getUsersAsync,
  createUserAsync,
  updateUserAsync,
  updateUserImageAsync,
  loginUserAsync,
  logoutUserAsync,
} from './user';
import { getGearsAsync, updateClubsAsync } from './gear';
// import { options } from '../utils/Toastify';
// import { toast } from 'react-toastify';

export default function* rootSaga() {
  yield all([
    yield takeLatest(ACTIONTYPES.REQUESTED_USER, getUsersAsync),
    yield takeLatest(ACTIONTYPES.REQUESTED_GEARS, getGearsAsync),
    yield takeLatest(ACTIONTYPES.UPDATE_CLUBS, updateClubsAsync),
    yield takeLatest(ACTIONTYPES.CREATE_USER, createUserAsync),
    yield takeLatest(ACTIONTYPES.UPDATE_USER, updateUserAsync),
    yield takeLatest(ACTIONTYPES.UPDATE_IMAGE_USER, updateUserImageAsync),
    yield takeLatest(ACTIONTYPES.LOGIN_USER, loginUserAsync),
    yield takeLatest(ACTIONTYPES.LOGOUT_USER, logoutUserAsync),
  ]);
}
