import { ACTIONTYPES } from '../actions';

const initialState: ClubTableTypes = [];

export default function ClubsReducer(
  state = initialState,
  action: Action<ClubTableTypes>
): ClubTableTypes {
  let newState = state;
  const clubs = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_CLUBS: {
      newState = [...state, ...clubs];
      return newState;
    }
    default: {
      return state;
    }
  }
}
