import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import createSagaMiddleware from 'redux-saga';
import App from './App';
import { BASICCOLORS } from "./utils/constant/color"
import { createGlobalStyle } from 'styled-components';
// import reducer from './reducers/Combine';
// import mySaga from './sagas/index';
// import Toastify from './utils/Toastify';
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;
    line-height: 1.5;
    font-size: 15px;
    color: ${BASICCOLORS.BASIC};
    font-weight: 400; 
  }
  body {
    padding: 0;
    margin: 0; 
  }
  h2{
    padding: 0;
    margin: 0; 
  }
  ul {
    padding: 0;
    margin: 0; 
  }
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: ${BASICCOLORS.WHITELIGHT};
  }
  textarea{
    min-height: 150px;
  }
  a:visited {
    color: none;
  }
`;

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// //saga
// sagaMiddleware.run(mySaga);
//saga


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    {/* <Provider store={}> */}
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
