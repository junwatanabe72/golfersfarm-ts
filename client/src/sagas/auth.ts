import { call, put } from 'redux-saga/effects';
import { addUser, getUsers, deleteUser } from '../actions/index';
import { push } from 'connected-react-router';
import { createUserAxios, loginUserAxios, checkLoginUserAxios } from '../services/axios/auth';

export function* createUserAsync(action: Action<SignupUserType>) {
  try {
    const { data } = yield call(createUserAxios, action.payload);
    if (data !== undefined) {
      // yield toast.success('投稿に成功しました。', options);
      console.log('成功しました。');
      yield put(push('/login'));
      return;
    } else {
      // yield toast.error('投稿に失敗しました。', options);
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
      // yield toast.success('投稿に成功しました。', options);
      console.log(user);
      return;
    } else {
      localStorage.setItem('jwt', token);
      yield put(addUser(user));
      yield put(getUsers());
      console.log('成功しました。');
      yield put(push(`/users/${user.id}`));
      // yield toast.error('投稿に失敗しました。', options);
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
    // yield toast.success('投稿に成功しました。', options);
    yield put(addUser(user));
    yield put(getUsers());
    console.log('jwtを確認できました');
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
    console.log('成功しました。');
    return;
  } catch (e) {
    return { e };
  }
}
