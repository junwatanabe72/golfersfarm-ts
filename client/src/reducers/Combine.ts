import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import currentUser from './CurrentUser';
import shafts from './Shafts';
import maker from './Maker';
import clubs from './Clubs';
import types from './Types';
import users from './Users';
export const router = createBrowserHistory();

const reducers = (history: typeof router) =>
  combineReducers({
    router: connectRouter(history),
    currentUser,
    users,
    clubs,
    types,
    shafts,
    maker,
  });

export default reducers;
