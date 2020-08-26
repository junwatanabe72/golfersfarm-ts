import { ACTIONTYPES, ClubsActionTypes } from '../actions';
import { clubTableTypes } from '../utils/constant/storeType';
const initialState: clubTableTypes = [];

export default function ClubsReducer(
  state = initialState,
  action: ClubsActionTypes
): clubTableTypes {
  let newState = state;
  const Clubs = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_CLUBS: {
      newState = [...Clubs];
      return newState;
    }
    default: {
      return state;
    }
  }
}
