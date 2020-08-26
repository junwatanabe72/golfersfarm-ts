import { Action } from 'redux';
import { clubType, club, maker, shaft } from '../utils/constant/text/body/user/value';
import {
  PartialUserObjectType,
  userThumbNailTypes,
  clubTableTypes,
  TypesData,
  ShaftsData,
  MakersData,
} from '../utils/constant/storeType';
//ACTIONTYPES
export const ACTIONTYPES = {
  ADD_USER: 'ADD_USER',
  DELETE_USER: 'DELETE_USER',
  ADD_USERS: 'ADD_USERS',
  ADD_CLUBS: 'ADD_CLUBS',
  ADD_TYPES: 'ADD_TYPES',
  ADD_SHAFTS: 'ADD_SHAFTS',
  ADD_MAKERS: 'ADD_MAKERS',
} as const;

// userAction
// export type PartialIUserData = Partial<userObjectType>;

export interface AddUserAction extends Action {
  type: typeof ACTIONTYPES.ADD_USER;
  payload: PartialUserObjectType;
}
export interface DeleteUserAction extends Action {
  type: typeof ACTIONTYPES.DELETE_USER;
}
export type UserActionTypes = AddUserAction | DeleteUserAction;

//usersAction

export interface AddUsersAction extends Action {
  type: typeof ACTIONTYPES.ADD_USERS;
  payload: userThumbNailTypes;
}
export type UsersActionTypes = AddUsersAction;

//clubsAction
// export type ClubData = typeof club;
// export type ClubsData = ClubData[];
export interface AddClubAction extends Action {
  type: typeof ACTIONTYPES.ADD_CLUBS;
  payload: clubTableTypes;
}
export type ClubsActionTypes = AddClubAction;

//typesAction
// export type TypeData = typeof clubType;
// export type TypesData = TypeData[];
export interface AddTypeAction extends Action {
  type: typeof ACTIONTYPES.ADD_TYPES;
  payload: TypesData;
}
export type TypesActionTypes = AddTypeAction;

//shaftsAction
// export type ShaftData = typeof shaft;
// export type ShaftsData = ShaftData[];
export interface AddShaftAction extends Action {
  type: typeof ACTIONTYPES.ADD_SHAFTS;
  payload: ShaftsData;
}
export type ShaftsActionTypes = AddShaftAction;

//makersAction
// export type MakerData = typeof maker;
// export type MakersData = MakerData[];
export interface AddMakerAction extends Action {
  type: typeof ACTIONTYPES.ADD_MAKERS;
  payload: MakersData;
}
export type MakersActionTypes = AddMakerAction;
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

//userActionCreater
export function addUser(data: PartialUserObjectType): UserActionTypes {
  return { type: ACTIONTYPES.ADD_USER, payload: data };
}
export function deleteUser(): UserActionTypes {
  return { type: ACTIONTYPES.DELETE_USER };
}
//usersActionCreater
export function addUsers(data: userThumbNailTypes): UsersActionTypes {
  return { type: ACTIONTYPES.ADD_USERS, payload: data };
}
//clubsActionCreater
export function addClubs(data: clubTableTypes): ClubsActionTypes {
  return { type: ACTIONTYPES.ADD_CLUBS, payload: data };
}
//typesActionCreater
export function addTypes(data: TypesData): TypesActionTypes {
  return { type: ACTIONTYPES.ADD_TYPES, payload: data };
}

//typesActionCreater
export function addShafts(data: ShaftsData): ShaftsActionTypes {
  return { type: ACTIONTYPES.ADD_SHAFTS, payload: data };
}
//typesActionCreater
export function addMakers(data: MakersData): MakersActionTypes {
  return { type: ACTIONTYPES.ADD_MAKERS, payload: data };
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
