import { call, put } from 'redux-saga/effects';
import { addClubs, removeClubs } from '../actions/index';
import { getGearsAxios, updateClubsAxios } from '../services/axios/gear';
// import { options } from '../utils/Toastify';
// import { toast } from 'react-toastify';

export function* updateClubsAsync(action: Action<PartialClubArrayTypes>) {
  let deleteClubs: PartialClubTableTypes = {};
  try {
    const { data } = yield call(updateClubsAxios, action.payload);
    if (!data) {
      return;
    }
    for (let value of action.payload) {
      if (!value.id) {
        return;
      }
      const id = value.id;
      deleteClubs[id] = value;
    }
    yield put(removeClubs(deleteClubs));
    yield put(addClubs(data.updateClubs));
    return;
  } catch (e) {
    return { e };
  }
}

export function* getGearsAsync(action: Action<PartialUserObjectType>) {
  const { data } = yield call(getGearsAxios, action.payload);
  try {
    if (!data) {
      // yield toast.error('取得に失敗しました。', options);
      return;
    }
    yield put(addClubs(data.allClubs));
    return;
  } catch (e) {
    return { e };
  }
}
