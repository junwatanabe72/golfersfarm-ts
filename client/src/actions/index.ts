//ACTIONTYPES
export const ACTIONTYPES = {
  ADD_USER: 'ADD_USER',
  DELETE_USER: 'DELETE_USER',
  ADD_USERS: 'ADD_USERS',
  ADD_CLUBS: 'ADD_CLUBS',
  REMOVE_CLUBS: 'REMOVE_CLUBS',
  ADD_TYPES: 'ADD_TYPES',
  ADD_SHAFTS: 'ADD_SHAFTS',
  ADD_MAKERS: 'ADD_MAKERS',
  REQUESTED_USER: 'REQUESTED_USER',
  REQUESTED_GEARS: 'REQUESTED_GEARS',
  CREATE_USER: 'CREATE_USER',
  UPDATE_USER: 'UPDATE_USER',
  UPDATE_CLUBS: 'UPDATE_CLUBS',
  UPDATE_IMAGE_USER: 'UPDATE_IMAGE_USER',
  LOGIN_USER: 'LOGIN_USER',
  LOGOUT_USER: 'LOGOUT_USER',
} as const;

//REDUX_SAGA
export function getUsers(): BasicAction {
  return { type: ACTIONTYPES.REQUESTED_USER };
}
export function createUser(data: SignupUserType): Action<SignupUserType> {
  return { type: ACTIONTYPES.CREATE_USER, payload: data };
}
export function updateUser(data: PartialUserType): Action<PartialUserType> {
  return { type: ACTIONTYPES.UPDATE_USER, payload: data };
}
export function updateImageUser(data: FormData): Action<FormData> {
  return { type: ACTIONTYPES.UPDATE_IMAGE_USER, payload: data };
}
export function loginUser(data: LoginUserType): Action<LoginUserType> {
  return { type: ACTIONTYPES.LOGIN_USER, payload: data };
}
export function logoutUser(): BasicAction {
  return { type: ACTIONTYPES.LOGOUT_USER };
}
export function getGears(data: PartialUserType): Action<PartialUserType> {
  return { type: ACTIONTYPES.REQUESTED_GEARS, payload: data };
}
export function updateClubs(data: PartialArrayClubType): Action<PartialArrayClubType> {
  return { type: ACTIONTYPES.UPDATE_CLUBS, payload: data };
}
//REDUX_SAGA

export function addUser(data: PartialUserType): Action<PartialUserType> {
  return { type: ACTIONTYPES.ADD_USER, payload: data };
}
export function deleteUser(): BasicAction {
  return { type: ACTIONTYPES.DELETE_USER };
}
//usersActionCreater
export function addUsers(data: ArrayPartialUserType): Action<ArrayPartialUserType> {
  return { type: ACTIONTYPES.ADD_USERS, payload: data };
}
//clubsActionCreater
export function addClubs(data: ObjectClubType): Action<ObjectClubType> {
  return { type: ACTIONTYPES.ADD_CLUBS, payload: data };
}
export function removeClubs(data: PartialObjectClubType): Action<PartialObjectClubType> {
  return { type: ACTIONTYPES.REMOVE_CLUBS, payload: data };
}
//typesActionCreater
export function addTypes(data: TypesData): Action<TypesData> {
  return { type: ACTIONTYPES.ADD_TYPES, payload: data };
}

//typesActionCreater
export function addShafts(data: ShaftsData): Action<ShaftsData> {
  return { type: ACTIONTYPES.ADD_SHAFTS, payload: data };
}
//typesActionCreater
export function addMakers(data: MakersData): Action<MakersData> {
  return { type: ACTIONTYPES.ADD_MAKERS, payload: data };
}
