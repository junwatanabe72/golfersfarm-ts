import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import {GlobalStyle} from "./utils/styled/globalStyle"
// import reducer from './reducers/Combine';
// import mySaga from './sagas';
// import Toastify from './utils/Toastify';
import * as serviceWorker from './serviceWorker';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducer);
// const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
// //saga
// sagaMiddleware.run(mySaga);
//saga


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    {/* <Provider store={store}> */}
      {/* <Toastify /> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
