import { ACTIONTYPES } from '../actions';

const initialState: ArrayPartialUserType = [];

export default function UsersReducer(
  state = initialState,
  action: Action<ArrayPartialUserType>
): ArrayPartialUserType {
  let newState = state;
  const users = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_USERS: {
      newState = [...users];
      return newState;
    }
    default: {
      return state;
    }
  }
}
