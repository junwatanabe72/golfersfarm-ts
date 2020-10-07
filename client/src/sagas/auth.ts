import { call, put, takeLatest, all } from 'redux-saga/effects';
import { addUser, getUsers, deleteUser, ACTIONTYPES } from '../actions/index';
import { push } from 'connected-react-router';
import { loginUserAxios, checkLoginUserAxios } from '../services/axios/auth';
import { options } from '../utils/Toastify';
import { toast } from 'react-toastify';
import { setAuthToken } from '../utils/axiosConf';

function* loginUserAsync(action: Action<LoginUserType>) {
  const { user, token } = yield call(loginUserAxios, action.payload);
  try {
    if (!user) {
      yield toast.error('ログインに失敗しました。', options);
      return;
    } else {
      localStorage.setItem('jwt', token);
      const jwt = `Bearer ${localStorage.getItem('jwt')}`;
      setAuthToken(jwt);
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

function* checkLoginUserAsync() {
  const jwt = `Bearer ${localStorage.getItem('jwt')}`;
  setAuthToken(jwt);
  const data = yield call(checkLoginUserAxios);
  const { user } = data;
  try {
    if (data.message || !user) {
      yield put(getUsers());
      return;
    }
    yield put(addUser(user));
    yield put(getUsers());
    yield toast.success('ログインに成功しました。', options);
    return;
  } catch (e) {
    return { e };
  }
}

function* logoutUserAsync() {
  try {
    localStorage.clear();
    setAuthToken();
    yield put(deleteUser());
    yield put(getUsers());
    yield toast.info('ログアウトに成功しました。', options);
    console.log('成功しました。');
    return;
  } catch (e) {
    return { e };
  }
}

export function* authSagas() {
  yield all([
    yield takeLatest(ACTIONTYPES.LOGIN_USER, loginUserAsync),
    yield takeLatest(ACTIONTYPES.CHECK_LOGIN_USER, checkLoginUserAsync),
    yield takeLatest(ACTIONTYPES.LOGOUT_USER, logoutUserAsync),
  ]);
}
