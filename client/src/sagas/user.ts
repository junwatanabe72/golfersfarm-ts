import { call, put } from 'redux-saga/effects';
import { addUser, addUsers, getUsers, deleteUser } from '../actions/index';
import {
  getUsersAxios,
  createUserAxios,
  loginUserAxios,
  updateUserAxios,
  updateUserImageAxios,
} from '../services/axios/user';
import { push } from 'connected-react-router';

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

export function* updateUserAsync(action: Action<PartialUserObjectType>) {
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

export function* loginUserAsync(action: Action<LoginUserType>) {
  const { targetUser } = yield call(loginUserAxios, action.payload);
  try {
    if (targetUser !== undefined) {
      // yield toast.success('投稿に成功しました。', options);
      // const loginUserClubs: clubListsType = data.data.targetUserClubs;
      // const clubList = Object.values(loginUserClubs).map((list: clubListType) => list.clubId);
      yield put(getUsers());
      yield put(addUser(targetUser));
      console.log('成功しました。');
      yield put(push(`/users/${targetUser.id}`));
      return;
    } else {
      // yield toast.error('投稿に失敗しました。', options);
      return;
    }
  } catch (e) {
    return { e };
  }
}
export function* logoutUserAsync() {
  try {
    yield put(deleteUser());
    yield put(getUsers());
    console.log('成功しました。');
    return;
  } catch (e) {
    return { e };
  }
}
