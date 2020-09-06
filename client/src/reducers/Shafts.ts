import { ACTIONTYPES } from '../actions';

const initialState: ShaftsData = [];

export default function ShaftsReducer(
  state = initialState,
  action: Action<ShaftsData>
): ShaftsData {
  let newState = state;
  const shafts = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_SHAFTS: {
      newState = [...shafts];
      return newState;
    }
    default: {
      return state;
    }
  }
}
