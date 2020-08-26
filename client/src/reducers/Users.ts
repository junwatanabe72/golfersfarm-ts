import { ACTIONTYPES, UsersActionTypes } from '../actions';
import { userThumbNailTypes } from '../utils/constant/storeType';
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
