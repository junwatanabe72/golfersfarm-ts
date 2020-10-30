import { ACTIONTYPES } from '../actions';
// import { ohterUser } from '../utils/constant/text/body/user/value';
// import { initialUser } from '../utils/constant/text/body/user/value';
// let a: ObjectUserType = { 1: initialUser };
// let b = 70;
// let c = 300;
// let d = 10;
// for (let i = 2; i <= 10; i++) {
//   a[i] = {
//     ...ohterUser,
//     name: 'ge',
//     id: i,
//     bestScore: b + i + Math.floor(Math.random() * 10),
//     averageDistance: c - d * i,
//     hcap: d + i + Math.floor(Math.random() * 10),
//   };
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
