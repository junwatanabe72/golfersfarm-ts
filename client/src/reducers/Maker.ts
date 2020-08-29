import { ACTIONTYPES } from '../actions';
import { MakersActionTypes } from '../@type/action';

const initialState: MakersData = [];

export default function ShaftsReducer(state = initialState, action: MakersActionTypes): MakersData {
  let newState = state;
  const Makers = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_MAKERS: {
      newState = [...Makers];
      return newState;
    }
    default: {
      return state;
    }
  }
}
