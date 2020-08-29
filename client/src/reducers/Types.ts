import { ACTIONTYPES } from '../actions';
import { TypesActionTypes } from '../@type/action';

const initialState: TypesData = [];

export default function TypesReducer(state = initialState, action: TypesActionTypes): TypesData {
  let newState = state;
  const Types = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_TYPES: {
      newState = [...Types];
      return newState;
    }
    default: {
      return state;
    }
  }
}
