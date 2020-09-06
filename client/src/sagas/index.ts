import { call, put, takeLatest, all } from 'redux-saga/effects';
import { ACTIONTYPES, addUser, addUsers, getUsers, deleteUser, addClubs } from '../actions/index';
import { getUsersAxios, createUserAxios, loginUserAxios } from '../services/axios/user';
import { push } from 'connected-react-router';
import { getGearsAxios } from '../services/axios/gear';
// import { options } from '../utils/Toastify';
// import { toast } from 'react-toastify';

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

export function* getGearsAsync(action: Action<PartialUserObjectType>) {
  const { data } = yield call(getGearsAxios, action.payload);
  try {
    if (data !== undefined) {
      const editClubs = data.allClubs.map((value: any) => {
        const { Club } = value;
        const { Maker, Shaft, ClubType, id, name } = Club;
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
      const { id, name, Maker } = data.targetBall;
      const ball = { id, name, maker: Maker.name };
      yield put(addClubs(editClubs));
      return;
    } else {
      // yield toast.error('取得に失敗しました。', options);
      return;
    }
  } catch (e) {
    return { e };
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
