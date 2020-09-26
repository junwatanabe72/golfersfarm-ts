import { call, put, takeLatest } from 'redux-saga/effects';
import { addBall, getBall, ACTIONTYPES } from '../actions/index';
import { options } from '../utils/Toastify';
import { toast } from 'react-toastify';
import { getBallAxios, updateBallAxios } from '../services/axios/ball';

export function* updateBallAsync(action: Action<BallType>) {
  let ball: ObjectBallType = {};
  try {
    const { data } = yield call(updateBallAxios, action.payload);

    if (!data) {
      yield toast.error('失敗しました。', options);
      return;
    }
    const getBall = data.returnBall;
    ball[getBall.id] = getBall;
    yield put(addBall(ball));
    yield toast.success('編集に成功しました。', options);
    return;
  } catch (e) {
    yield toast.error('失敗しました。', options);
    return { e };
  }
}

export function* getBallAsync(action: Action<PartialUserType>) {
  let ball: ObjectBallType = {};
  const { data } = yield call(getBallAxios, action.payload);
  try {
    if (!data) {
      return;
    }
    const getBall = data.targetBall;
    ball[getBall.id] = getBall;

    yield put(addBall(ball));
    return;
  } catch (e) {
    return { e };
  }
}

const ballSagas = [
  takeLatest(ACTIONTYPES.REQUESTED_BALL, getBallAsync),
  takeLatest(ACTIONTYPES.UPDATE_BALL, updateBallAsync),
];
export default ballSagas;
