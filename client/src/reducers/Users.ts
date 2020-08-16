import { ACTIONTYPES, UsersData, UsersActionTypes } from '../actions';

const initialState: UsersData = [];

export default function UsersReducer(state = initialState, action: UsersActionTypes): UsersData {
  let newState = state;
  const Users = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_USERS: {
      newState = [...Users];
      return newState;
    }
    default: {
      return state;
    }
  }
}
