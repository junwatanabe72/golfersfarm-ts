type ACTIONTYPES =
  | 'ADD_USER'
  | 'DELETE_USER'
  | 'ADD_USERS'
  | 'ADD_CLUBS'
  | 'ADD_TYPES'
  | 'ADD_SHAFTS'
  | 'ADD_MAKERS'
  | 'REQUESTED_USER'
  | 'REQUESTED_GEARS'
  | 'CREATE_USER'
  | 'UPDATE_USER'
  | 'LOGIN_USER'
  | 'LOGOUT_USER';

interface Action<T> extends Action<ACTIONTYPES, T> {
  type: ACTIONTYPES;
  payload: T;
}
interface TypeAction extends Action {
  type: ACTIONTYPES;
}
