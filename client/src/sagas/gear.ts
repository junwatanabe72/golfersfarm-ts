import { call, put, takeLatest } from 'redux-saga/effects';
import { addClubs, removeClubs, ACTIONTYPES } from '../actions/index';
import { getGearsAxios, updateClubsAxios } from '../services/axios/gear';
import { options } from '../utils/Toastify';
import { toast } from 'react-toastify';

export function* updateClubsAsync(action: Action<PartialArrayClubType>) {
  let Clubs: ObjectClubType = {};
  let deleteClubs: PartialObjectClubType = {};
  try {
    const { data } = yield call(updateClubsAxios, action.payload);

    if (!data) {
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

export function* getGearsAsync(action: Action<PartialUserType>) {
  let Clubs: ObjectClubType = {};
  const { data } = yield call(getGearsAxios, action.payload);
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

const gearSagas = [
  takeLatest(ACTIONTYPES.REQUESTED_GEARS, getGearsAsync),
  takeLatest(ACTIONTYPES.UPDATE_CLUBS, updateClubsAsync),
];
export default gearSagas;
