type ACTIONTYPES =
  | 'ADD_USER'
  | 'DELETE_USER'
  | 'ADD_USERS'
  | 'ADD_CLUBS'
  | 'REMOVE_CLUBS'
  | 'ADD_TYPES'
  | 'ADD_SHAFTS'
  | 'ADD_MAKERS'
  | 'CREATE_USER'
  | 'LOGIN_USER'
  | 'CHECK_LOGIN_USER'
  | 'LOGOUT_USER'
  | 'REQUESTED_USER'
  | 'UPDATE_USER'
  | 'UPDATE_IMAGE_USER'
  | 'REQUESTED_GEARS'
  | 'UPDATE_CLUBS';

interface Action<T> extends Action<ACTIONTYPES, T> {
  type: ACTIONTYPES;
  payload: T;
}
interface BasicAction extends Action {
  type: ACTIONTYPES;
}
