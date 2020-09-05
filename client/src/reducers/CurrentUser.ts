import { ACTIONTYPES } from '../actions';
import { UserActionTypes } from '../@type/action';
import { initialUser } from '../utils/constant/text/body/user/value';
const initialState: PartialUserObjectType = initialUser;

export default function CurrentUserReducer(
  state = initialState,
  action: UserActionTypes
): PartialUserObjectType {
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
