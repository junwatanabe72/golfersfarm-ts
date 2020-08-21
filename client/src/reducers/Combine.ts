import { combineReducers } from 'redux';
import CurrentUser from './CurrentUser';
import User from './User';
import Shafts from './Shafts';
import Maker from './Maker';
import Clubs from './Clubs';
import Types from './Types';
import Users from './Users';

const reducers = combineReducers({ CurrentUser, Users, Clubs, Types, Shafts, Maker });

export default reducers;
