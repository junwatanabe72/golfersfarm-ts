import { combineReducers } from 'redux';
import CurrentUser from './CurrentUser';
import User from './User';
import Users from './Users';

const reducers = combineReducers({ CurrentUser, Users });

export default reducers;
