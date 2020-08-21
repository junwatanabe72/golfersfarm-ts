import { ACTIONTYPES, ClubsData, ClubsActionTypes } from '../actions';

const initialState: ClubsData = [];

export default function ClubsReducer(state = initialState, action: ClubsActionTypes): ClubsData {
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
