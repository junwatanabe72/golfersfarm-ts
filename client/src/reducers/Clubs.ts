import { ACTIONTYPES } from '../actions';

// objectに変更する。
const sample = [
  { id: 1, type: '1wood', name: 'x-drive', userId: 1, maker: 'mizuno', shaft: 'pt-7', flex: 's' },
  { id: 2, type: '1wood', name: 'x-drive', userId: 1, maker: 'mizuno', shaft: 'pt-7', flex: 's' },
];
const initialState: PartialClubTableTypes = [];

export default function ClubsReducer(
  state = initialState,
  action: Action<PartialClubTableTypes>
): PartialClubTableTypes {
  let newState = state;
  const clubs = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_CLUBS: {
      newState = [...state, ...clubs];
      return newState;
    }
    case ACTIONTYPES.REMOVE_CLUBS: {
      const clubsIds = Object.values(clubs).map((value: PartialClubObjectType) => {
        return value.id;
      });
      newState = newState.filter((value: PartialClubObjectType) => {
        const data = clubsIds.includes(value.id);
        return !data;
      });
      return newState;
    }
    default: {
      return state;
    }
  }
}
