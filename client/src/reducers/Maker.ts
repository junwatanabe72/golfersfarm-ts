import { ACTIONTYPES } from '../actions';

const initialState: MakersData = [];

export default function ShaftsReducer(
  state = initialState,
  action: Action<MakersData>
): MakersData {
  let newState = state;
  const makers = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_MAKERS: {
      newState = [...makers];
      return newState;
    }
    default: {
      return state;
    }
  }
}
