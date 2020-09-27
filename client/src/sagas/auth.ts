import { call, put, takeLatest, all } from 'redux-saga/effects';
import { addUser, getUsers, deleteUser, ACTIONTYPES } from '../actions/index';
import { push } from 'connected-react-router';
import { loginUserAxios, checkLoginUserAxios } from '../services/axios/auth';
import { options } from '../utils/Toastify';
import { toast } from 'react-toastify';

export function* loginUserAsync(action: Action<LoginUserType>) {
  console.log(action);
  const { user, token } = yield call(loginUserAxios, action.payload);
  try {
    if (!user) {
      yield toast.error('ログインに失敗しました。', options);
      return;
    } else {
      localStorage.setItem('jwt', token);
      yield put(addUser(user));
      yield put(getUsers());
      yield put(push(`/users/${user.id}`));
      yield toast.success('ログインに成功しました。', options);
      return;
    }
  } catch (e) {
    return { e };
  }
}

export function* checkLoginUserAsync() {
  const data = yield call(checkLoginUserAxios);
  try {
    if (data.e) {
      return;
    }
    const user = data.user;

    yield put(addUser(user));
    yield put(getUsers());
    yield toast.success('ログインに成功しました。', options);
    return;
  } catch (e) {
    return { e };
  }
}

export function* logoutUserAsync() {
  try {
    localStorage.clear();
    yield put(deleteUser());
    yield put(getUsers());
    yield toast.info('ログアウトに成功しました。', options);
    console.log('成功しました。');
    return;
  } catch (e) {
    return { e };
  }
}

const authSagas = [
  takeLatest(ACTIONTYPES.LOGIN_USER, loginUserAsync),
  takeLatest(ACTIONTYPES.CHECK_LOGIN_USER, checkLoginUserAsync),
  takeLatest(ACTIONTYPES.LOGOUT_USER, logoutUserAsync),
];
export default authSagas;
