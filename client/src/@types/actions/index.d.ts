type ACTIONTYPES =
  | 'ADD_USER'
  | 'DELETE_USER'
  | 'ADD_USERS'
  | 'DELETE_USERS'
  | 'ADD_CLUBS'
  | 'REMOVE_CLUBS'
  | 'ADD_VIDEOS'
  | 'REMOVE_VIDEOS'
  | 'ADD_RESULTS'
  | 'REMOVE_RESULTS'
  | 'ADD_BALL'
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
  | 'REQUESTED_CLUBS'
  | 'UPDATE_CLUBS'
  | 'REQUESTED_VIDEOS'
  | 'UPDATE_VIDEOS'
  | 'REQUESTED_BALL'
  | 'UPDATE_BALL'
  | 'REQUESTED_RESULTS'
  | 'UPDATE_RESULTS'
  | 'REQUESTED_TYPES'
  | 'REQUESTED_SHAFTS'
  | 'REQUESTED_MAKERS'
  | 'MODAL_PUSH'
  | 'MODAL_POP'
  | 'SEND_MESSAGE';

interface Action<T> extends Action<ACTIONTYPES, T> {
  type: ACTIONTYPES;
  payload: T;
}
interface BasicAction extends Action {
  type: ACTIONTYPES;
}
