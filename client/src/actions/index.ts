//REDUX_SAGA
// export const ISSUE_REQUESTED = 'ISSUE_REQUESTED';
// export function getIssue(issue) {
//   return { type: ISSUE_REQUESTED, payload: { issue } };
// }

// export const ISSUE_POSTREQUESTED = 'ISSUE_POSTREQUESTED';
// export function postIssue(issue) {
//   return { type: ISSUE_POSTREQUESTED, payload: { issue } };
// }

// export const ISSUE_PUTREQUESTED = 'ISSUE_PUTREQUESTED';
// export function putIssue(issue) {
//   return { type: ISSUE_PUTREQUESTED, payload: { issue } };
// }

// export const USER_REQUESTED = 'USER_REQUESTED';
// export function getUser(user) {
//   return { type: USER_REQUESTED, payload: { user } };
// }
//REDUX_SAGA

import { initialUser } from "../utils/constant/text/body/user/text";
type a = typeof initialUser;

export const ADD_USER = 'ADD_USER';
export function addUser(data: a) {
  return { type: ADD_USER, payload:  data  };
}

// Issue Action Creators & Action Type:
// export const ADD_ISSUE = 'ADD_ISSUE';
// export function addIssue(issue) {
//   return { type: ADD_ISSUE, payload: { issue } };
// }

// Modal Action Creators & Action Type
// export const MODAL_PUSH = 'MODAL_PUSH';
// export function modalPush(argComponent) {
//   return { type: MODAL_PUSH, payload: { argComponent } };
// }
// export const MODAL_POP = 'MODAL_POP';
// export function modalPop() {
//   return { type: MODAL_POP, payload: {} };
// }