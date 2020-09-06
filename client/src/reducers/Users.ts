import { ACTIONTYPES } from '../actions';

const initialState: UserThumbNailTypes = [];

export default function UsersReducer(
  state = initialState,
  action: Action<UserThumbNailTypes>
): UserThumbNailTypes {
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
