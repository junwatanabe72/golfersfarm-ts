import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers/Combine';
import { AddUserAction, DeleteUserAction, AddUsersAction } from '../actions';
// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

export const store = createStore(reducers);
export type State = ReturnType<typeof store.getState>;
export type UserActionTypes = AddUserAction | DeleteUserAction;
export type UsersActionTypes = AddUsersAction;
