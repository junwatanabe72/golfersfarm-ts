import { call, put } from 'redux-saga/effects';
import { addClubs, removeClubs } from '../actions/index';
import { getGearsAxios, updateClubsAxios } from '../services/axios/gear';
// import { options } from '../utils/Toastify';
// import { toast } from 'react-toastify';

export function* updateClubsAsync(action: Action<PartialClubTableTypes>) {
  try {
    const { data } = yield call(updateClubsAxios, action.payload);
    if (!data) {
      return;
    }
    console.log(data.returnData);
    yield put(removeClubs(action.payload));
    yield put(addClubs(data.returnData));
    return;
  } catch (e) {
    return { e };
  }
}

export function* getGearsAsync(action: Action<PartialUserObjectType>) {
  const { data } = yield call(getGearsAxios, action.payload);
  try {
    if (data !== undefined) {
      yield put(addClubs(data.allClubs));
      return;
    } else {
      // yield toast.error('取得に失敗しました。', options);
      return;
    }
  } catch (e) {
    return { e };
  }
}
