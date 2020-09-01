import {
  UserActionTypes,
  UsersActionTypes,
  ClubsActionTypes,
  TypesActionTypes,
  ShaftsActionTypes,
  MakersActionTypes,
  sagaActionTypes,
} from '../@type/action';
//ACTIONTYPES
export const ACTIONTYPES = {
  ADD_USER: 'ADD_USER',
  DELETE_USER: 'DELETE_USER',
  ADD_USERS: 'ADD_USERS',
  ADD_CLUBS: 'ADD_CLUBS',
  ADD_TYPES: 'ADD_TYPES',
  ADD_SHAFTS: 'ADD_SHAFTS',
  ADD_MAKERS: 'ADD_MAKERS',
  REQUESTED_USER: 'REQUESTED_USER',
  REQUESTED_GEARS: 'REQUESTED_GEARS',
  CREATE_USER: 'CREATE_USER',
  LOGIN_USER: 'LOGIN_USER',
  LOGOUT_USER: 'LOGOUT_USER',
} as const;

//REDUX_SAGA
export function getUsers(): sagaActionTypes {
  return { type: ACTIONTYPES.REQUESTED_USER };
}
export function createUser(data: signupUserType): sagaActionTypes {
  return { type: ACTIONTYPES.CREATE_USER, payload: data };
}
export function loginUser(data: loginUserType): sagaActionTypes {
  return { type: ACTIONTYPES.LOGIN_USER, payload: data };
}
export function logoutUser(): sagaActionTypes {
  return { type: ACTIONTYPES.LOGOUT_USER };
}
export function getGears(data: PartialUserObjectType): sagaActionTypes {
  return { type: ACTIONTYPES.REQUESTED_GEARS, payload: data };
}
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
