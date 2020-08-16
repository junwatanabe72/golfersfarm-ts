import { Action } from 'redux';
import { initialUser } from '../utils/constant/text/body/user/text';

//ACTIONTYPES
export const ACTIONTYPES = {
  ADD_USER: 'ADD_USER',
  ADD_USERS: 'ADD_USERS',
  DELETE_USER: 'DELETE_USER',
} as const;

// userAction
export type UserData = typeof initialUser;
export type PartialIUserData = Partial<UserData>;

export interface AddUserAction extends Action {
  type: typeof ACTIONTYPES.ADD_USER;
  payload: PartialIUserData;
}
export interface DeleteUserAction extends Action {
  type: typeof ACTIONTYPES.DELETE_USER;
}
export type UserActionTypes = AddUserAction | DeleteUserAction;

//usersAction
export type UsersData = UserData[];
export interface AddUsersAction extends Action {
  type: typeof ACTIONTYPES.ADD_USERS;
  payload: UsersData;
}

export type stateDatas = { User: UserData } | { Users: UsersData };
export type UsersActionTypes = AddUsersAction;

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

//user
export function addUser(data: PartialIUserData): UserActionTypes {
  return { type: ACTIONTYPES.ADD_USER, payload: data };
}

export function deleteUser(): UserActionTypes {
  return { type: ACTIONTYPES.DELETE_USER };
}

//users
export function addUsers(data: UsersData): UsersActionTypes {
  return { type: ACTIONTYPES.ADD_USERS, payload: data };
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
