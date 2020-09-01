import { call, put, takeLatest, all } from 'redux-saga/effects';
import { ACTIONTYPES, addUser, addUsers, getUsers, deleteUser, addClubs } from '../actions/index';
import { getUsersAxios, createUserAxios, loginUserAxios } from '../services/axios/user';
import { push } from 'connected-react-router';
import { getGearsAxios } from '../services/axios/gear';
// import { options } from '../utils/Toastify';
// import { toast } from 'react-toastify';

//users
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
export function* logoutUserAsync() {
  yield put(deleteUser());
  yield put(getUsers());
  console.log('成功しました。');
  return;
}

export function* getGearsAsync(action: {
  type: typeof ACTIONTYPES.REQUESTED_GEARS;
  payload: PartialUserObjectType;
}) {
  const { data } = yield call(getGearsAxios, action.payload);

  if (data !== undefined) {
    const editClubs = data.allClubs.map((value: any) => {
      const { Maker, Shaft, ClubType, id, name } = value;
      const club = {
        id,
        name,
        maker: Maker.name,
        shaft: Shaft.name,
        flex: Shaft.flex,
        type: ClubType.type,
      };
      return club;
    });
    // const { id, name, Maker } = data.targetBall;
    // const ball = { id, name, maker: Maker.name };
    // console.log(ball);
    yield put(addClubs(editClubs));

    return;
  } else {
    // yield toast.error('取得に失敗しました。', options);
    return;
  }
}

export default function* rootSaga() {
  yield all([
    yield takeLatest(ACTIONTYPES.REQUESTED_USER, getUsersAsync),
    yield takeLatest(ACTIONTYPES.REQUESTED_GEARS, getGearsAsync),
    yield takeLatest(ACTIONTYPES.CREATE_USER, createUserAsync),
    yield takeLatest(ACTIONTYPES.LOGIN_USER, loginUserAsync),
    yield takeLatest(ACTIONTYPES.LOGOUT_USER, logoutUserAsync),
  ]);
}
