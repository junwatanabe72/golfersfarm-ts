import { call, put } from 'redux-saga/effects';
import { addUser, getUsers, deleteUser } from '../actions/index';
import { push } from 'connected-react-router';
import { createUserAxios, loginUserAxios, checkLoginUserAxios } from '../services/axios/auth';
import { options } from '../utils/Toastify';
import { toast } from 'react-toastify';

export function* createUserAsync(action: Action<SignupUserType>) {
  try {
    const { data } = yield call(createUserAxios, action.payload);
    if (data !== undefined) {
      yield toast.success('新規登録に成功しました。', options);
      yield put(push('/login'));
      return;
    } else {
      yield toast.error('失敗しました。', options);
      return;
    }
  } catch (e) {
    return { e };
  }
}

export function* loginUserAsync(action: Action<LoginUserType>) {
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
    if (!data) {
      return;
    }
    console.log(data);
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
