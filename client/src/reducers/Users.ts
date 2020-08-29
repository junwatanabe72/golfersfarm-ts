import { ACTIONTYPES } from '../actions';
import { UsersActionTypes } from '../@type/action';

const initialState: userThumbNailTypes = [];

export default function UsersReducer(
  state = initialState,
  action: UsersActionTypes
): userThumbNailTypes {
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
