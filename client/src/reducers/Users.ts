import { ACTIONTYPES } from '../actions';
// import { ohterUser } from '../utils/constant/text/body/user/value';
// let a: ObjectUserType = {};
// for (let i = 1; i <= 100; i++) {
//   a[i] = { ...ohterUser, id: i };
// }

const initialState: ObjectUserType = {};

export default function UsersReducer(
  state = initialState,
  action: Action<ObjectUserType>
): ObjectUserType {
  let newState = state;
  const users = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_USERS: {
      newState = { ...state, ...users };
      return newState;
    }
    case ACTIONTYPES.DELETE_USERS: {
      newState = {};
      return newState;
    }
    default: {
      return state;
    }
  }
}
