import { ACTIONTYPES } from '../actions';

const initialState: TypesData = [];

export default function TypesReducer(state = initialState, action: Action<TypesData>): TypesData {
  let newState = state;
  const types = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_TYPES: {
      newState = [...types];
      return newState;
    }
    default: {
      return state;
    }
  }
}
