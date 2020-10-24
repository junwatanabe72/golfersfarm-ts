import { ACTIONTYPES } from '../actions';
// import { initialUser } from '../utils/constant/text/body/user/value';
const initialState: PartialCurrentUserType = {};

export default function CurrentUserReducer(
  state = initialState,
  action: Action<PartialCurrentUserType>
): PartialCurrentUserType {
  let newState = state;
  switch (action.type) {
    case ACTIONTYPES.ADD_USER: {
      const user = action.payload || {};
      newState = { ...user };
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
