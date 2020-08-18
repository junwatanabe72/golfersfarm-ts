import { ACTIONTYPES, PartialIUserData, UserActionTypes } from '../actions';

const initialState: PartialIUserData = {};

export default function CurrentUserReducer(
  state = initialState,
  action: UserActionTypes
): PartialIUserData {
  let newState = state;
  switch (action.type) {
    case ACTIONTYPES.ADD_USER: {
      const User = action.payload || {};
      newState = { ...User };
      return newState;
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
