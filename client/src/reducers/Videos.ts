import { ACTIONTYPES } from '../actions';

const sample = {
  5: {
    id: 5,
    name: 'swing真横',
    userId: 1,
    url: 'wet97FIk2iY',
  },
  7: {
    id: 7,
    name: 'swing真横',
    userId: 1,
    url: 'wet97FIk2iY',
  },
};
const initialState: ObjectVideoType = {};

export default function VideosReducer(
  state = initialState,
  action: Action<ObjectVideoType>
): ObjectVideoType {
  let newState = state;
  const videos = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_VIDEOS: {
      newState = { ...state, ...videos };
      return newState;
    }
    case ACTIONTYPES.REMOVE_VIDEOS: {
      const videoIds = Object.keys(videos);

      for (let video in newState) {
        if (videoIds.includes(video)) {
          delete newState[video];
        }
      }
      return newState;
    }
    default: {
      return state;
    }
  }
}
