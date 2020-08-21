import { ACTIONTYPES, PartialIUserData, UserActionTypes } from '../actions';

const initialState: PartialIUserData = {};

export default function UserReducer(
  state = initialState,
  action: UserActionTypes
): PartialIUserData {
  let newState = state;
  switch (action.type) {
    case ACTIONTYPES.ADD_USER: {
      return action.payload || {};
    }
    case ACTIONTYPES.DELETE_USER: {
      newState = {};
      return newState;
    }
    default: {
      return state;
    }
  }
}
