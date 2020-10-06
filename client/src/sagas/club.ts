import { call, put, takeLatest, all } from 'redux-saga/effects';
import { addClubs, removeClubs, ACTIONTYPES } from '../actions/index';
import { getClubsAxios, updateClubsAxios } from '../services/axios/club';
import { options } from '../utils/Toastify';
import { toast } from 'react-toastify';

function* updateClubsAsync(action: Action<PartialArrayClubType>) {
  let Clubs: ObjectClubType = {};
  let deleteClubs: PartialObjectClubType = {};
  console.log(action.payload);
  try {
    const { data } = yield call(updateClubsAxios, action.payload);
    if (!data.updateClubs) {
      yield toast.error('失敗しました。', options);
      return;
    }
    for (let value of data.updateClubs) {
      const id = value.id;
      Clubs[id] = value;
    }

    for (let value of action.payload) {
      if (!value.id) {
      } else {
        const id = value.id;
        deleteClubs[id] = value;
      }
    }

    yield put(removeClubs(deleteClubs));
    yield put(addClubs(Clubs));
    yield toast.success('編集に成功しました。', options);
    return;
  } catch (e) {
    yield toast.error('失敗しました。', options);
    return { e };
  }
}

function* getClubsAsync(action: Action<PartialUserType>) {
  let Clubs: ObjectClubType = {};
  const { data } = yield call(getClubsAxios, action.payload);
  try {
    if (!data) {
      return;
    }
    for (let value of data.allClubs) {
      const id = value.id;
      Clubs[id] = value;
    }
    yield put(addClubs(Clubs));
    return;
  } catch (e) {
    return { e };
  }
}

export function* clubSagas() {
  yield all([
    yield takeLatest(ACTIONTYPES.REQUESTED_CLUBS, getClubsAsync),
    yield takeLatest(ACTIONTYPES.UPDATE_CLUBS, updateClubsAsync),
  ]);
}
