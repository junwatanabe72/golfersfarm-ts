import { call, put, takeLatest, all } from 'redux-saga/effects';
// import {
//   ISSUE_REQUESTED,
//   ISSUE_POSTREQUESTED,
//   ISSUE_PUTREQUESTED,
//   addIssue,
//   addUser,
//   USER_REQUESTED,
// } from '../actions/index';
// import { getAxios, postAxios, putAxios, getUserAxios } from '../service/Axios';
// import { options } from '../utils/Toastify';
// import { toast } from 'react-toastify';

// export function* getIssueAsync(action) {
//   const { data } = yield call(getAxios, action.payload);
//   yield put(addIssue(data.data));
//   return;
// }

// export function* postIssueAsync(action) {
//   const { data } = yield call(postAxios, action.payload);
//   if (data !== undefined) {
//     yield toast.success('投稿に成功しました。', options);
//     yield call(getIssueAsync, action.payload);
//     return;
//   } else {
//     yield toast.error('投稿に失敗しました。', options);
//     return;
//   }
// }

// export function* putIssueAsync(action) {
//   const response = yield call(putAxios, action.payload);
//   if (!response) {
//     yield toast.error('更新に失敗しました。', options);
//     return;
//   } else {
//     yield toast.success('更新に成功しました。', options);
//     yield call(getIssueAsync, action.payload);
//     return;
//   }
// }

// //fix toast出す
// export function* getUserAsync() {
//   const { data } = yield call(getUserAxios);
//   if (data !== undefined) {
//     yield put(addUser(data.data));
//     return;
//   } else {
//     yield toast.error('取得に失敗しました。', options);
//     return;
//   }
// }

// export default function* rootSaga() {
//   yield all([
//     yield takeLatest(ISSUE_REQUESTED, getIssueAsync),
//     yield takeLatest(ISSUE_POSTREQUESTED, postIssueAsync),
//     yield takeLatest(ISSUE_PUTREQUESTED, putIssueAsync),
//     yield takeLatest(USER_REQUESTED, getUserAsync),
//   ]);
// }