import { Action } from 'redux';
// import { ACTIONTYPES } from '../action';

const ACTIONTYPES = {
  ADD_USER: 'ADD_USER',
  DELETE_USER: 'DELETE_USER',
  ADD_USERS: 'ADD_USERS',
  ADD_CLUBS: 'ADD_CLUBS',
  ADD_TYPES: 'ADD_TYPES',
  ADD_SHAFTS: 'ADD_SHAFTS',
  ADD_MAKERS: 'ADD_MAKERS',
} as const;

interface AddUserAction extends Action {
  type: typeof ACTIONTYPES.ADD_USER;
  payload: PartialUserObjectType;
}
interface DeleteUserAction extends Action {
  type: typeof ACTIONTYPES.DELETE_USER;
}
type UserActionTypes = AddUserAction | DeleteUserAction;

//usersAction

interface AddUsersAction extends Action {
  type: typeof ACTIONTYPES.ADD_USERS;
  payload: userThumbNailTypes;
}

type UsersActionTypes = AddUsersAction;

//clubsAction
// export type ClubData = typeof club;
// export type ClubsData = ClubData[];
interface AddClubAction extends Action {
  type: typeof ACTIONTYPES.ADD_CLUBS;
  payload: clubTableTypes;
}

type ClubsActionTypes = AddClubAction;

//typesAction
// export type TypeData = typeof clubType;
// export type TypesData = TypeData[];
interface AddTypeAction extends Action {
  type: typeof ACTIONTYPES.ADD_TYPES;
  payload: TypesData;
}
type TypesActionTypes = AddTypeAction;

//shaftsAction
// export type ShaftData = typeof shaft;
// export type ShaftsData = ShaftData[];
interface AddShaftAction extends Action {
  type: typeof ACTIONTYPES.ADD_SHAFTS;
  payload: ShaftsData;
}
type ShaftsActionTypes = AddShaftAction;

//makersAction
// export type MakerData = typeof maker;
// export type MakersData = MakerData[];
interface AddMakerAction extends Action {
  type: typeof ACTIONTYPES.ADD_MAKERS;
  payload: MakersData;
}
type MakersActionTypes = AddMakerAction;
