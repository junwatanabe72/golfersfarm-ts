import { call, put, takeLatest } from 'redux-saga/effects';
import { addUser, addUsers, ACTIONTYPES } from '../actions/index';
import { getUsersAxios, updateUserAxios, updateUserImageAxios } from '../services/axios/user';
import { options } from '../utils/Toastify';
import { toast } from 'react-toastify';
import { createUserAsync } from './auth';

//users
export function* getUsersAsync() {
  const { allUsers } = yield call(getUsersAxios);
  try {
    const dbUsers = allUsers;
    yield put(addUsers(dbUsers));
    return;
  } catch (e) {
    return { e };
  }
}

export function* updateUserAsync(action: Action<PartialUserType>) {
  try {
    const { updateUser } = yield call(updateUserAxios, action.payload);
    if (!updateUser) {
      yield toast.error('編集に失敗しました。', options);
      return;
    }
    yield toast.success('編集に成功しました。', options);
    const user = updateUser.updateUser;
    yield put(addUser(user));
    return;
  } catch (e) {
    return { e };
  }
}

export function* updateUserImageAsync(action: Action<FormData>) {
  try {
    const { updateUser } = yield call(updateUserImageAxios, action.payload);
    if (!updateUser) {
      yield toast.error('失敗しました。', options);
      return;
    }
    yield toast.success('編集に成功しました。', options);
    const user = updateUser.updateUser;
    yield put(addUser(user));
    return;
  } catch (e) {
    return { e };
  }
}

const userSagas = [
  takeLatest(ACTIONTYPES.REQUESTED_USER, getUsersAsync),
  takeLatest(ACTIONTYPES.CREATE_USER, createUserAsync),
  takeLatest(ACTIONTYPES.UPDATE_USER, updateUserAsync),
  takeLatest(ACTIONTYPES.UPDATE_IMAGE_USER, updateUserImageAsync),
];
export default userSagas;
