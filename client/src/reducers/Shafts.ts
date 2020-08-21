import { ACTIONTYPES, ShaftsData, ShaftsActionTypes, TypeData } from '../actions';

const initialState: ShaftsData = [];

export default function ShaftsReducer(state = initialState, action: ShaftsActionTypes): ShaftsData {
  let newState = state;
  const Shafts = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_SHAFTS: {
      newState = [...Shafts];
      return newState;
    }
    default: {
      return state;
    }
  }
}
