import { ACTIONTYPES } from '../actions';

const sample = [
  { id: 1, type: '1wood', name: 'x-drive', userId: 1, maker: 'mizuno', shaft: 'pt-7', flex: 's' },
  { id: 2, type: '1wood', name: 'x-drive', userId: 1, maker: 'mizuno', shaft: 'pt-7', flex: 's' },
];
const initialState: ClubTableTypes = sample;

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
