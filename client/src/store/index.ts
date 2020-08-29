import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers/Combine';
// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

export const store = createStore(reducers);
