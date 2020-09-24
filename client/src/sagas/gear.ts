import { call, put } from 'redux-saga/effects';
import { addClubs, removeClubs } from '../actions/index';
import { getGearsAxios, updateClubsAxios } from '../services/axios/gear';
import { options } from '../utils/Toastify';
import { toast } from 'react-toastify';

export function* updateClubsAsync(action: Action<PartialArrayClubType>) {
  let deleteClubs: PartialObjectClubType = {};
  try {
    const { data } = yield call(updateClubsAxios, action.payload);

    if (!data) {
      yield toast.error('失敗しました。', options);
      return;
    }

    for (let value of action.payload) {
      if (!value.id) {
      } else {
        const id = value.id;
        deleteClubs[id] = value;
      }
    }
    yield put(removeClubs(deleteClubs));
    yield put(addClubs(data.updateClubs));
    yield toast.success('編集に成功しました。', options);
    return;
  } catch (e) {
    yield toast.error('失敗しました。', options);
    return { e };
  }
}

export function* getGearsAsync(action: Action<PartialUserType>) {
  const { data } = yield call(getGearsAxios, action.payload);
  try {
    if (!data) {
      return;
    }
    yield put(addClubs(data.allClubs));
    return;
  } catch (e) {
    return { e };
  }
}
