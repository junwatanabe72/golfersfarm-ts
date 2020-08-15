import { combineReducers } from 'redux';
import User from './User';
import Users from './Users';

const reducers = combineReducers({ User, Users });

export default reducers;
