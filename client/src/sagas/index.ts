import { call, put, takeLatest, all } from 'redux-saga/effects';
import { ACTIONTYPES, addUser, addUsers, createUser, getUsers } from '../actions/index';
import { getUsersAxios, createUserAxios, loginUserAxios } from '../services/axios/user';
import { push } from 'connected-react-router';
// import { options } from '../utils/Toastify';
// import { toast } from 'react-toastify';

export function* getUsersAsync() {
  const { data } = yield call(getUsersAxios);
  const dbUsers = data.allUsers;
  const allUserClubs: clubListsType = data.allUserClubs;
  const storeUsers: userThumbNailTypes = dbUsers.map((user: PartialUserObjectType) => {
    const clubList = Object.values(allUserClubs)
      .filter((list: clubListType) => list.userId === user.id)
      .map((list: clubListType) => list.clubId);
    return { ...user, clubs: [...clubList] };
  });
  yield put(addUsers(storeUsers));
  return;
}

export function* createUserAsync(action: {
  type: typeof ACTIONTYPES.CREATE_USER;
  payload: signupUserType;
}) {
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
}

export function* loginUserAsync(action: {
  type: typeof ACTIONTYPES.LOGIN_USER;
  payload: loginUserType;
}) {
  const { data } = yield call(loginUserAxios, action.payload);
  if (data !== undefined) {
    // yield toast.success('投稿に成功しました。', options);
    const loginUserClubs: clubListsType = data.data.targetUserClubs;
    const clubList = Object.values(loginUserClubs).map((list: clubListType) => list.clubId);
    const loginUser = { ...data.data.targetUser, clubs: [...clubList] };
    yield put(getUsers());
    yield put(addUser(loginUser));
    console.log('成功しました。');
    yield put(push(`/users/${loginUser.id}`));
    return;
  } else {
    // yield toast.error('投稿に失敗しました。', options);
    return;
  }
}

// export function* putIssueAsync(action) {
//   const response = yield call(putAxios, action.payload);
//   if (!response) {
//     yield toast.error('更新に失敗しました。', options);
//     return;
//   } else {
//     yield toast.success('更新に成功しました。', options);
//     yield call(getIssueAsync, action.payload);
//     return;
//   }
// }

// //fix toast出す
// export function* getUserAsync() {
//   const { data } = yield call(getUserAxios);
//   if (data !== undefined) {
//     yield put(addUser(data.data));
//     return;
//   } else {
//     yield toast.error('取得に失敗しました。', options);
//     return;
//   }
// }

export default function* rootSaga() {
  yield all([
    yield takeLatest(ACTIONTYPES.REQUESTED_USER, getUsersAsync),
    yield takeLatest(ACTIONTYPES.CREATE_USER, createUserAsync),
    yield takeLatest(ACTIONTYPES.LOGIN_USER, loginUserAsync),
  ]);
}
