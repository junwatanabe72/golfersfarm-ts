import { ACTIONTYPES } from '../actions';
import { ClubsActionTypes } from '../@type/action';

const initialState: clubTableTypes = [];

export default function ClubsReducer(
  state = initialState,
  action: ClubsActionTypes
): clubTableTypes {
  let newState = state;
  const Clubs = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_CLUBS: {
      newState = [...state, ...Clubs];
      return newState;
    }
    default: {
      return state;
    }
  }
}
