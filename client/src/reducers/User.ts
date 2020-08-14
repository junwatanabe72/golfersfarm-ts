import { ADD_USER } from '../actions';
import { initialUser } from '../utils/constant/text/body/user/text';
type a = typeof initialUser;
type b = {
  type: 'ADD_USER';
  payload: a;
};

export default function UserReducer(state = initialUser, action: b): a {
  const data = action.payload || {};
  switch (action.type) {
    case ADD_USER: {
      return data;
    }
    default: {
      return state;
    }
  }
}
