import { call, put } from 'redux-saga/effects';
import { addUser, addUsers } from '../actions/index';
import { getUsersAxios, updateUserAxios, updateUserImageAxios } from '../services/axios/user';

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
    if (updateUser !== undefined) {
      // yield toast.success('投稿に成功しました。', options);
      console.log('成功しました。');
      const user = updateUser.updateUser;
      yield put(addUser(user));
      return;
    } else {
      // yield toast.error('投稿に失敗しました。', options);
      return;
    }
  } catch (e) {
    return { e };
  }
}

export function* updateUserImageAsync(action: Action<FormData>) {
  try {
    const { updateUser } = yield call(updateUserImageAxios, action.payload);
    if (updateUser !== undefined) {
      // yield toast.success('投稿に成功しました。', options);
      console.log('成功しました。');
      const user = updateUser.updateUser;
      yield put(addUser(user));
      return;
    } else {
      // yield toast.error('投稿に失敗しました。', options);
      return;
    }
  } catch (e) {
    return { e };
  }
}