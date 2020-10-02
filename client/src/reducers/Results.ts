import { ACTIONTYPES } from '../actions';

const sample = {
  5: {
    id: 5,
    name: '日本オープン',
    userId: 1,
    date: 2020,
    rank: '1',
    url: 'https://www.yahoo.co.jp/',
  },
  7: {
    id: 7,
    name: '日本オープン',
    userId: 1,
    date: 2020,
    rank: '50',
  },
};
const initialState: PartialObjectResultType = {};

export default function ResultsReducer(
  state = initialState,
  action: Action<PartialObjectResultType>
): PartialObjectResultType {
  let newState = state;
  const results = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_RESULTS: {
      newState = { ...state, ...results };
      return newState;
    }
    case ACTIONTYPES.REMOVE_RESULTS: {
      const resultIds = Object.keys(results);

      for (let result in newState) {
        if (resultIds.includes(result)) {
          delete newState[result];
        }
      }
      return newState;
    }
    default: {
      return state;
    }
  }
}
