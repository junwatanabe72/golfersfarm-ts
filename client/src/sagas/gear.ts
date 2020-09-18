import { call, put } from 'redux-saga/effects';
import { addClubs, removeClubs } from '../actions/index';
import {
  getGearsAxios,
  createClubAxios,
  deleteClubAxios,
  updateClubAxios,
} from '../services/axios/gear';
// import { options } from '../utils/Toastify';
// import { toast } from 'react-toastify';

export function* updateClubsAsync(action: Action<any>) {
  const updateClubs = action.payload.submitClubs;
  const deleteTargetClubs = action.payload.deleteTargetClubs;

  let newState: ClubTableTypes = [];
  let updateState: ClubTableTypes = [];
  let deleteState: ClubTableTypes = [];
  try {
    for (let value of deleteTargetClubs) {
      const { data } = yield call(deleteClubAxios, value);
      if (data !== undefined) {
        deleteState = [...deleteTargetClubs];
      }
    }

    for (let value of updateClubs) {
      if (value.id) {
        const { data } = yield call(updateClubAxios, value);
        if (data !== undefined) {
          updateState = [...data];
        }
      } else {
        const { data } = yield call(createClubAxios, value);
        if (data !== undefined) {
          newState = [...data];
        }
      }
    }
    newState = [...newState, ...updateState];
    deleteState = [...deleteState, ...updateState];
    yield put(removeClubs(deleteState));
    yield put(addClubs(newState));
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
