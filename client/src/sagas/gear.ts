import { call, put } from 'redux-saga/effects';
import { addClubs } from '../actions/index';
import { getGearsAxios } from '../services/axios/gear';
// import { options } from '../utils/Toastify';
// import { toast } from 'react-toastify';

export function* getGearsAsync(action: Action<PartialUserObjectType>) {
  const { data } = yield call(getGearsAxios, action.payload);
  try {
    if (data !== undefined) {
      const editClubs = data.allClubs.map((value: any) => {
        const { Club, userId } = value;
        const { Maker, Shaft, ClubType, id, name } = Club;
        const club = {
          id,
          name,
          userId: userId,
          maker: Maker.name,
          shaft: Shaft.name,
          flex: Shaft.flex,
          type: ClubType.type,
        };
        return club;
      });
      // const { id, name, Maker } = data.targetBall;
      // const ball = { id, name, maker: Maker.name };
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
