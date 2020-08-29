import { ACTIONTYPES } from '../actions';
import { UserActionTypes } from '../@type/action';

const initialState: PartialUserObjectType = {};

export default function UserReducer(
  state = initialState,
  action: UserActionTypes
): PartialUserObjectType {
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
