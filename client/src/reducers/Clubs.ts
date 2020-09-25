import { ACTIONTYPES } from '../actions';

// objectに変更する。
const sample = {
  5: {
    id: 5,
    type: '1wood',
    name: 'x-drive',
    userId: 1,
    maker: 'mizuno',
    shaft: 'pt-7',
    flex: 's',
  },
  7: {
    id: 7,
    type: '1wood',
    name: 'x-drive',
    userId: 1,
    maker: 'mizuno',
    shaft: 'pt-7',
    flex: 's',
  },
};
const initialState: ObjectClubType = {};

export default function ClubsReducer(
  state = initialState,
  action: Action<ObjectClubType>
): ObjectClubType {
  let newState = state;
  const clubs = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_CLUBS: {
      newState = { ...state, ...clubs };
      return newState;
    }
    case ACTIONTYPES.REMOVE_CLUBS: {
      const clubIds = Object.keys(clubs);
      console.log(clubIds);

      for (let club in newState) {
        if (clubIds.includes(club)) {
          delete newState[club];
        }
        console.log(newState);
      }
      return newState;
    }
    default: {
      return state;
    }
  }
}
