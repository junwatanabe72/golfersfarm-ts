import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import CurrentUser from './CurrentUser';
import Shafts from './Shafts';
import Maker from './Maker';
import Clubs from './Clubs';
import Types from './Types';
import Users from './Users';
export const router = createBrowserHistory();

const reducers = (history: typeof router) =>
  combineReducers({
    router: connectRouter(history),
    CurrentUser,
    Users,
    Clubs,
    Types,
    Shafts,
    Maker,
  });

export default reducers;
